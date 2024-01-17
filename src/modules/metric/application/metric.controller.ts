import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from 'libraries/event'
import {
  Metric,
  MetricDomainFacade,
} from 'modules/metric/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MetricApplicationEvent } from './metric.application.event'
import {
  MetricCreateDto,
  MetricUpdateDto,
} from './metric.dto'

@Controller('/v1/metrics')
export class MetricController {
  constructor(
    private eventService: EventService,
    private metricDomainFacade: MetricDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.metricDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: MetricCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.metricDomainFacade.create(body)

    await this.eventService.emit<MetricApplicationEvent.MetricCreated.Payload>(
      MetricApplicationEvent
        .MetricCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:metricId')
  async findOne(
    @Param('metricId') metricId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.metricDomainFacade.findOneByIdOrFail(
        metricId,
        queryOptions,
      )

    return item
  }

  @Patch('/:metricId')
  async update(
    @Param('metricId') metricId: string,
    @Body() body: MetricUpdateDto,
  ) {
    const item =
      await this.metricDomainFacade.findOneByIdOrFail(
        metricId,
      )

    const itemUpdated = await this.metricDomainFacade.update(
      item,
      body as Partial<Metric>,
    )
    return itemUpdated
  }

  @Delete('/:metricId')
  async delete(@Param('metricId') metricId: string) {
    const item =
      await this.metricDomainFacade.findOneByIdOrFail(
        metricId,
      )

    await this.metricDomainFacade.delete(item)

    return item
  }
}

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
  Insight,
  InsightDomainFacade,
} from 'modules/insight/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { InsightApplicationEvent } from './insight.application.event'
import {
  InsightCreateDto,
  InsightUpdateDto,
} from './insight.dto'

@Controller('/v1/insights')
export class InsightController {
  constructor(
    private eventService: EventService,
    private insightDomainFacade: InsightDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.insightDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: InsightCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.insightDomainFacade.create(body)

    await this.eventService.emit<InsightApplicationEvent.InsightCreated.Payload>(
      InsightApplicationEvent
        .InsightCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:insightId')
  async findOne(
    @Param('insightId') insightId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.insightDomainFacade.findOneByIdOrFail(
        insightId,
        queryOptions,
      )

    return item
  }

  @Patch('/:insightId')
  async update(
    @Param('insightId') insightId: string,
    @Body() body: InsightUpdateDto,
  ) {
    const item =
      await this.insightDomainFacade.findOneByIdOrFail(
        insightId,
      )

    const itemUpdated = await this.insightDomainFacade.update(
      item,
      body as Partial<Insight>,
    )
    return itemUpdated
  }

  @Delete('/:insightId')
  async delete(@Param('insightId') insightId: string) {
    const item =
      await this.insightDomainFacade.findOneByIdOrFail(
        insightId,
      )

    await this.insightDomainFacade.delete(item)

    return item
  }
}

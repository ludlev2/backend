import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { MetricDomainFacade } from 'modules/metric/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { MetricApplicationEvent } from './metric.application.event'
import { MetricCreateDto } from './metric.dto'

import { FinancialdataDomainFacade } from '../../financialdata/domain'

@Controller('/v1/financialdatas')
export class MetricByFinancialdataController {
  constructor(
    
    private financialdataDomainFacade: FinancialdataDomainFacade,
    
    private metricDomainFacade: MetricDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/financialData/:financialDataId/metrics')
  async findManyFinancialDataId(
    @Param('financialDataId') financialDataId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const financialdata =
      await this.financialdataDomainFacade.findOneByIdOrFail(
        financialDataId,
      )

    const items =
      await this.metricDomainFacade.findManyByFinancialData(
        financialdata,
        queryOptions,
      )

    return items
  }

  @Post('/financialData/:financialDataId/metrics')
  async createByFinancialDataId(
    @Param('financialDataId') financialDataId: string,
    @Body() body: MetricCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, financialDataId }

    const item = await this.metricDomainFacade.create(valuesUpdated)

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
  
}

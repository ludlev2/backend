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
  Financialdata,
  FinancialdataDomainFacade,
} from 'modules/financialdata/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FinancialdataApplicationEvent } from './financialdata.application.event'
import {
  FinancialdataCreateDto,
  FinancialdataUpdateDto,
} from './financialdata.dto'

@Controller('/v1/financialdatas')
export class FinancialdataController {
  constructor(
    private eventService: EventService,
    private financialdataDomainFacade: FinancialdataDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.financialdataDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: FinancialdataCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.financialdataDomainFacade.create(body)

    await this.eventService.emit<FinancialdataApplicationEvent.FinancialdataCreated.Payload>(
      FinancialdataApplicationEvent
        .FinancialdataCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:financialdataId')
  async findOne(
    @Param('financialdataId') financialdataId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.financialdataDomainFacade.findOneByIdOrFail(
        financialdataId,
        queryOptions,
      )

    return item
  }

  @Patch('/:financialdataId')
  async update(
    @Param('financialdataId') financialdataId: string,
    @Body() body: FinancialdataUpdateDto,
  ) {
    const item =
      await this.financialdataDomainFacade.findOneByIdOrFail(
        financialdataId,
      )

    const itemUpdated = await this.financialdataDomainFacade.update(
      item,
      body as Partial<Financialdata>,
    )
    return itemUpdated
  }

  @Delete('/:financialdataId')
  async delete(@Param('financialdataId') financialdataId: string) {
    const item =
      await this.financialdataDomainFacade.findOneByIdOrFail(
        financialdataId,
      )

    await this.financialdataDomainFacade.delete(item)

    return item
  }
}

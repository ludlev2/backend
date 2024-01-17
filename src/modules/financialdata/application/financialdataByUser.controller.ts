import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { FinancialdataDomainFacade } from 'modules/financialdata/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { FinancialdataApplicationEvent } from './financialdata.application.event'
import { FinancialdataCreateDto } from './financialdata.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class FinancialdataByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private financialdataDomainFacade: FinancialdataDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/financialdatas')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const user =
      await this.userDomainFacade.findOneByIdOrFail(
        userId,
      )

    const items =
      await this.financialdataDomainFacade.findManyByUser(
        user,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/financialdatas')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: FinancialdataCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.financialdataDomainFacade.create(valuesUpdated)

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
  
}

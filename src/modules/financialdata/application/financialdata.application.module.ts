import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { FinancialdataDomainModule } from '../domain'
import { FinancialdataController } from './financialdata.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FinancialdataByUserController } from './financialdataByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    FinancialdataDomainModule,

UserDomainModule,

],
  controllers: [
    FinancialdataController,
    
    FinancialdataByUserController,
    
  ],
  providers: [],
})
export class FinancialdataApplicationModule {}

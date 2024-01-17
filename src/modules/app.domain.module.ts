import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { FinancialdataDomainModule } from './financialdata/domain'

import { MetricDomainModule } from './metric/domain'

import { InsightDomainModule } from './insight/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

FinancialdataDomainModule,

MetricDomainModule,

InsightDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}

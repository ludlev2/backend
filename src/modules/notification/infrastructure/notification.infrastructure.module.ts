import { Module } from '@nestjs/common'
import { SocketModule } from 'libraries/socket'
import { AuthorizationDomainModule } from 'modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationFinancialdataSubscriber } from './subscribers/notification.financialdata.subscriber'

import { NotificationMetricSubscriber } from './subscribers/notification.metric.subscriber'

import { NotificationInsightSubscriber } from './subscribers/notification.insight.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationFinancialdataSubscriber,

NotificationMetricSubscriber,

NotificationInsightSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}

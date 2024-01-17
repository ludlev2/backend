import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { FinancialdataApplicationModule } from './financialdata/application'

import { MetricApplicationModule } from './metric/application'

import { InsightApplicationModule } from './insight/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,

FinancialdataApplicationModule,

MetricApplicationModule,

InsightApplicationModule,

],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}

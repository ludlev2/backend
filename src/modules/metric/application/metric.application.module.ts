import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { MetricDomainModule } from '../domain'
import { MetricController } from './metric.controller'

import { FinancialdataDomainModule } from '../../../modules/financialdata/domain'

import { MetricByFinancialdataController } from './metricByFinancialdata.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    MetricDomainModule,

FinancialdataDomainModule,

],
  controllers: [
    MetricController,
    
    MetricByFinancialdataController,
    
  ],
  providers: [],
})
export class MetricApplicationModule {}

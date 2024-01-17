import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MetricDomainFacade } from './metric.domain.facade'
import { Metric } from './metric.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Metric]),
    DatabaseHelperModule,
  ],
  providers: [
    MetricDomainFacade,
    MetricDomainFacade,
  ],
  exports: [MetricDomainFacade],
})
export class MetricDomainModule {}

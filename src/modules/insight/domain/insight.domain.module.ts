import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { InsightDomainFacade } from './insight.domain.facade'
import { Insight } from './insight.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Insight]),
    DatabaseHelperModule,
  ],
  providers: [
    InsightDomainFacade,
    InsightDomainFacade,
  ],
  exports: [InsightDomainFacade],
})
export class InsightDomainModule {}

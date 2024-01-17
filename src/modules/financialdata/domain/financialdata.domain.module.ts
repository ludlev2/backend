import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FinancialdataDomainFacade } from './financialdata.domain.facade'
import { Financialdata } from './financialdata.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Financialdata]),
    DatabaseHelperModule,
  ],
  providers: [
    FinancialdataDomainFacade,
    FinancialdataDomainFacade,
  ],
  exports: [FinancialdataDomainFacade],
})
export class FinancialdataDomainModule {}

import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { InsightDomainModule } from '../domain'
import { InsightController } from './insight.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    InsightDomainModule,
    
  ],
  controllers: [
    InsightController,
    
  ],
  providers: [],
})
export class InsightApplicationModule {}

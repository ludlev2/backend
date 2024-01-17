import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class MetricCreateDto {

@IsNumber()

@IsOptional()
  cashMetric?: number

@IsNumber()

@IsOptional()
  revenueMetric?: number

@IsNumber()

@IsOptional()
  unitEconomicMetric?: number

@IsString()

@IsOptional()
  financialDataId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}

export class MetricUpdateDto {

@IsNumber()

@IsOptional()
  cashMetric?: number

@IsNumber()

@IsOptional()
  revenueMetric?: number

@IsNumber()

@IsOptional()
  unitEconomicMetric?: number

@IsString()

@IsOptional()
  financialDataId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}

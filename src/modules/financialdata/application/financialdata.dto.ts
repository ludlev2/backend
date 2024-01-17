import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class FinancialdataCreateDto {

@IsString()

@IsOptional()
  data?: string

@IsString()

@IsOptional()
  submissionDate?: string

@IsString()

@IsOptional()
  userId?: string

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

export class FinancialdataUpdateDto {

@IsString()

@IsOptional()
  data?: string

@IsString()

@IsOptional()
  submissionDate?: string

@IsString()

@IsOptional()
  userId?: string

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

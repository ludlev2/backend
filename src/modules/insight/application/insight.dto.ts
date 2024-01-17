import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class InsightCreateDto {

@IsString()

@IsOptional()
  content?: string

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

export class InsightUpdateDto {

@IsString()

@IsOptional()
  content?: string

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

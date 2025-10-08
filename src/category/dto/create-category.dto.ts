import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}

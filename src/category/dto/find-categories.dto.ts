import { IsOptional, IsUUID } from 'class-validator';

export class FindCategoriesDto {
  @IsOptional()
  @IsUUID()
  userId?: string;
}

import { IsOptional, IsUUID } from 'class-validator';

export class FindRecordsDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;
}

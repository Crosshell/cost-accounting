import { ApiProperty } from '@nestjs/swagger';

export class ServerStatus {
  @ApiProperty({ example: '2025-09-29T14:51:39.938Z' })
  date: Date;

  @ApiProperty({ example: 'ok' })
  status: string;
}

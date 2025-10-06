import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { RecordRepository } from './record.repository';

@Module({
  controllers: [RecordController],
  providers: [RecordService, RecordRepository],
})
export class RecordModule {}

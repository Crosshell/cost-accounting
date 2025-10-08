import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { RecordRepository } from './record.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoryModule } from '../category/category.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, CategoryModule, UserModule],
  controllers: [RecordController],
  providers: [RecordService, RecordRepository],
})
export class RecordModule {}

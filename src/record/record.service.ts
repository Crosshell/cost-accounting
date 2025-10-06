import { BadRequestException, Injectable } from '@nestjs/common';
import { RecordRepository } from './record.repository';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record';
import { FindRecordsDto } from './dto/find-records.dto';

@Injectable()
export class RecordService {
  constructor(private readonly repository: RecordRepository) {}

  create(dto: CreateRecordDto): Record {
    return this.repository.create(dto);
  }

  find(dto: FindRecordsDto): Record[] {
    if (!dto.userId && !dto.categoryId) {
      throw new BadRequestException('userId or categoryId is required');
    }
    return this.repository.find(dto);
  }

  deleteById(id: string): string {
    return this.repository.deleteById(id);
  }

  getById(id: string): Record | string {
    return this.repository.getById(id);
  }
}

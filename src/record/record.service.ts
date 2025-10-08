import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RecordRepository } from './record.repository';
import { CreateRecordDto } from './dto/create-record.dto';
import { FindRecordsDto } from './dto/find-records.dto';
import { Record } from '@prisma/client';

@Injectable()
export class RecordService {
  constructor(private readonly repository: RecordRepository) {}

  async create(dto: CreateRecordDto): Promise<Record> {
    return this.repository.create(dto);
  }

  async findMany(dto: FindRecordsDto): Promise<Record[]> {
    if (!dto.userId && !dto.categoryId) {
      throw new BadRequestException('userId or categoryId is required');
    }

    return this.repository.findMany(dto);
  }

  async delete(id: string): Promise<Record> {
    const record = await this.repository.findOne({ id });

    if (!record) {
      throw new BadRequestException(`Record with id: ${id} not found`);
    }
    return this.repository.delete({ id });
  }

  async findOne(id: string): Promise<Record> {
    const record = await this.repository.findOne({ id });

    if (!record) {
      throw new NotFoundException(`Record with id: ${id} not found`);
    }

    return record;
  }
}

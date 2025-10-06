import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record';
import { FindRecordsDto } from './dto/find-records.dto';

@Injectable()
export class RecordRepository {
  private records: Record[] = [];

  create(dto: CreateRecordDto): Record {
    const record: Record = {
      id: this.records.length + 1,
      userId: dto.userId,
      categoryId: dto.categoryId,
      amount: dto.amount ?? 0,
      createdAt: new Date(),
    };

    this.records.push(record);

    return record;
  }

  find(dto: FindRecordsDto): Record[] {
    return this.records.filter(
      (r) =>
        (dto.userId == undefined || r.userId == dto.userId) &&
        (dto.categoryId == undefined || r.categoryId == dto.categoryId),
    );
  }

  deleteById(id: string): string {
    const recordIndex = this.records.findIndex((record) => record.id == id);
    if (recordIndex !== -1) {
      this.records.splice(recordIndex, 1);
      return 'Category deleted successfully';
    }

    return `Category with id: ${id} not found`;
  }

  getById(id: string): Record | string {
    const record = this.records.find((record) => record.id == id);

    if (!record) {
      return `Record with id: ${id} not found`;
    }

    return record;
  }
}

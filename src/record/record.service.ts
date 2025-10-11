import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RecordRepository } from './record.repository';
import { CreateRecordDto } from './dto/create-record.dto';
import { FindRecordsDto } from './dto/find-records.dto';
import { Record } from '@prisma/client';
import { CategoryService } from '../category/category.service';
import { UserService } from '../user/user.service';

@Injectable()
export class RecordService {
  constructor(
    private readonly repository: RecordRepository,
    private readonly categoryService: CategoryService,
    private readonly userService: UserService,
  ) {}

  async create(dto: CreateRecordDto): Promise<Record> {
    const user = await this.userService.findOne({ id: dto.userId });

    if (!user) {
      throw new BadRequestException(`User with id: ${dto.userId} not found`);
    }

    const category = await this.categoryService.findOne(dto.categoryId);

    if (category.userId && category.userId !== dto.userId) {
      throw new BadRequestException(
        `Category with id: ${dto.categoryId} belongs to another user`,
      );
    }

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

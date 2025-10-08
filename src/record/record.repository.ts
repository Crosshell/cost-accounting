import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Record } from '@prisma/client';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRecordDto): Promise<Record> {
    const { userId, categoryId, ...data } = dto;

    return this.prisma.record.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
        category: { connect: { id: categoryId } },
      },
    });
  }

  async findMany(where: Prisma.RecordWhereInput): Promise<Record[]> {
    return this.prisma.record.findMany({ where });
  }

  async delete(where: Prisma.RecordWhereUniqueInput): Promise<Record> {
    return this.prisma.record.delete({ where });
  }

  async findOne(where: Prisma.RecordWhereUniqueInput): Promise<Record | null> {
    return this.prisma.record.findUnique({ where });
  }
}

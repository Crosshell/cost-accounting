import { Injectable } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findOne(
    where: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    return this.prisma.category.findUnique({ where });
  }

  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({ data });
  }

  async delete(where: Prisma.CategoryWhereUniqueInput): Promise<Category> {
    return this.prisma.category.delete({ where });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  async getAll(): Promise<Category[]> {
    return this.repository.getAll();
  }

  async findOne(id: string): Promise<Category> {
    const user = await this.repository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`Category with id: ${id} not found`);
    }

    return user;
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    return this.repository.create(dto);
  }

  async delete(id: string): Promise<Category> {
    const user = await this.repository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`Category with id: ${id} not found`);
    }

    return this.repository.delete({ id });
  }
}

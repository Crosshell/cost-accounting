import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from './entities/category';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  getAll(): Category[] {
    return this.repository.getAll();
  }

  getById(id: string): Category | string {
    return this.repository.getById(id);
  }

  create(dto: CreateCategoryDto): Category {
    return this.repository.create(dto);
  }

  deleteById(id: string): string {
    return this.repository.deleteById(id);
  }
}

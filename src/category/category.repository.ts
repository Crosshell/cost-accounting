import { Injectable } from '@nestjs/common';
import { Category } from './entities/category';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryRepository {
  private categories: Category[] = [];

  getAll(): Category[] {
    return this.categories;
  }

  getById(id: string): Category | string {
    const category = this.categories.find((category) => category.id == id);

    if (!category) {
      return `Category with id: ${id} not found`;
    }

    return category;
  }

  create(dto: CreateCategoryDto): Category {
    const category: Category = {
      id: this.categories.length + 1,
      name: dto.name,
    };

    this.categories.push(category);

    return category;
  }

  deleteById(id: string): string {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id == id,
    );

    if (categoryIndex !== -1) {
      this.categories.splice(categoryIndex, 1);
      return 'Category deleted successfully';
    }

    return `Category with id: ${id} not found`;
  }
}

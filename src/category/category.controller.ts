import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Category } from './entities/category';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  getAll(): Category[] {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Category | string {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() dto: CreateCategoryDto): Category {
    return this.service.create(dto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): string {
    return this.service.deleteById(id);
  }
}

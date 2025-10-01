import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get()
  getAll() {
    return 'All categories';
  }

  @Get(':id')
  getById() {
    return 'Category by id';
  }

  @Post()
  create() {
    return 'Category created';
  }

  @Delete(':id')
  deleteById() {
    return 'Category deleted';
  }
}

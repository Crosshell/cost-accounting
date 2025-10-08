import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return this.service.getAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateCategoryDto): Promise<Category> {
    return this.service.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
    return this.service.delete(id);
  }
}

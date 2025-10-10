import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('user/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.service.findOne(id);
  }

  @Delete('user/:id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.service.delete(id);
  }

  @Post('user')
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return this.service.create(dto);
  }

  @Get('users')
  async getAll(): Promise<User[]> {
    return this.service.getAll();
  }
}

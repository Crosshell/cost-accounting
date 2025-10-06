import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('user/:id')
  getById(@Param('id') id: string): User | string {
    return this.service.getById(id);
  }

  @Delete('user/:id')
  deleteById(@Param('id') id: string): User | string {
    return this.service.deleteById(id);
  }

  @Post('user')
  create(@Body() dto: CreateUserDto): User {
    return this.service.create(dto);
  }

  @Get('users')
  getAll(): User[] {
    return this.service.getAll();
  }
}

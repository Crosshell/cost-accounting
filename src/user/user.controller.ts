import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('user/:id')
  getById(@Param('id') id: string) {}

  @Delete('user/:id')
  deleteById(@Param('id') id: string) {}

  @Post('user')
  create(@Body() dto: CreateUserDto): User {
    return this.service.create(dto);
  }

  @Get('users')
  getAll() {}
}

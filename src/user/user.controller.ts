import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('user/:id')
  getUserById(@Param('id') id: string) {}

  @Delete('user/:id')
  deleteUserById(@Param('id') id: string) {}

  @Post('user')
  createUser() {}

  @Get('users')
  getAllUsers() {}
}

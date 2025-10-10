import { Controller, Delete, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserWithoutPassword } from './types/user-without-password';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('user/:id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UserWithoutPassword> {
    return this.service.findOne(id);
  }

  @Delete('user/:id')
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UserWithoutPassword> {
    return this.service.delete(id);
  }

  @Get('users')
  async getAll(): Promise<UserWithoutPassword[]> {
    return this.service.getAll();
  }
}

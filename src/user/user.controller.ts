import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserWithoutPassword } from './types/user-without-password';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('user/:id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UserWithoutPassword> {
    const user = await this.service.findOne({ id });

    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }

    return user;
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

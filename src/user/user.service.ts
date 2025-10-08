import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(readonly repository: UserRepository) {}

  async findOne(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }

    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.repository.create(dto);
  }

  async delete(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    if (!user) {
      throw new BadRequestException(`User with id: ${id} not found`);
    }

    return this.repository.delete({ id });
  }

  async getAll(): Promise<User[]> {
    return this.repository.getAll();
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { RegisterDto } from '../auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { UserWithoutPassword } from './types/user-without-password';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(readonly repository: UserRepository) {}

  async findOneWithPassword(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.repository.findOneWithPassword(where);
  }

  async findOne(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithoutPassword | null> {
    return this.repository.findOne(where);
  }

  async create(dto: RegisterDto): Promise<UserWithoutPassword> {
    const user = await this.repository.findOne({ username: dto.username });

    if (user) {
      throw new BadRequestException('User with this username already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.repository.create({ ...dto, password: hashedPassword });
  }

  async delete(id: string): Promise<UserWithoutPassword> {
    const user = await this.repository.findOne({ id });

    if (!user) {
      throw new BadRequestException(`User with id: ${id} not found`);
    }

    return this.repository.delete({ id });
  }

  async getAll(): Promise<UserWithoutPassword[]> {
    return this.repository.getAll();
  }
}

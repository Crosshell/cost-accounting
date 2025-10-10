import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserWithoutPassword } from './types/user-without-password';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<UserWithoutPassword> {
    return this.prisma.user.create({ data, omit: { password: true } });
  }

  async getAll(): Promise<UserWithoutPassword[]> {
    return this.prisma.user.findMany({ omit: { password: true } });
  }

  async findOne(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithoutPassword | null> {
    return this.prisma.user.findUnique({ where, omit: { password: true } });
  }

  async findOneWithPassword(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({ where });
  }

  async delete(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithoutPassword> {
    return this.prisma.user.delete({ where, omit: { password: true } });
  }
}

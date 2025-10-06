import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(readonly repository: UserRepository) {}

  getById(id: string): User | string {
    return this.repository.getById(id);
  }

  create(dto: CreateUserDto): User {
    return this.repository.create(dto);
  }

  deleteById(id: string): string {
    return this.repository.deleteById(id);
  }

  getAll(): User[] {
    return this.repository.getAll();
  }
}

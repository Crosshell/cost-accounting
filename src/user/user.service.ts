import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(readonly repository: UserRepository) {}

  create(dto: CreateUserDto): User {
    return this.repository.create(dto);
  }
}

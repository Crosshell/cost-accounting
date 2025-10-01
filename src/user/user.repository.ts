import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user';

export class UserRepository {
  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const user: User = {
      id: this.users.length + 1,
      name: dto.name,
    };

    this.users.push(user);

    return user;
  }
}

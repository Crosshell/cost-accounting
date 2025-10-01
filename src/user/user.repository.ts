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

  getAll(): User[] {
    return this.users;
  }

  getById(id: string): User | string {
    const user = this.users.find((user) => user.id == id);

    if (!user) {
      return `User with id: ${id} not found`;
    }

    return user;
  }

  deleteById(id: string): string {
    const userIndex = this.users.findIndex((user) => user.id == id);

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return 'User deleted successfully';
    }

    return `User with id: ${id} not found`;
  }
}

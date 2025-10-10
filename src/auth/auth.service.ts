import { Injectable } from '@nestjs/common';
import { UserWithoutPassword } from '../user/types/user-without-password';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(dto: RegisterDto): Promise<UserWithoutPassword> {
    return this.userService.create(dto);
  }
}

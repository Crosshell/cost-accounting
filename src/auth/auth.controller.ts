import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserWithoutPassword } from '../user/types/user-without-password';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<UserWithoutPassword> {
    return this.service.register(dto);
  }
}

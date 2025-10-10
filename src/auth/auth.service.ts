import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserWithoutPassword } from '../user/types/user-without-password';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(dto: RegisterDto): Promise<UserWithoutPassword> {
    return this.userService.create(dto);
  }

  async verifyAccessToken(token: string): Promise<UserWithoutPassword> {
    try {
      return this.jwtService.verifyAsync<UserWithoutPassword>(token, {
        secret: this.config.getOrThrow<string>('JWT_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

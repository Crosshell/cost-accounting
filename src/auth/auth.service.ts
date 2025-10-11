import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserWithoutPassword } from '../user/types/user-without-password';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCredentials(dto: LoginDto): Promise<UserWithoutPassword> {
    const user = await this.userService.findOneWithPassword({
      username: dto.username,
    });

    const isValid = user && (await bcrypt.compare(dto.password, user.password));

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...safeUser } = user;

    return safeUser;
  }

  async login(user: UserWithoutPassword): Promise<{ accessToken: string }> {
    const payload = { id: user.id };
    return { accessToken: await this.jwtService.signAsync(payload) };
  }

  async register(dto: RegisterDto): Promise<UserWithoutPassword> {
    return this.userService.create(dto);
  }

  async verifyAccessToken(token: string): Promise<UserWithoutPassword> {
    try {
      return this.jwtService.verifyAsync<UserWithoutPassword>(token);
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

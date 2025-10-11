import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 30)
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 30)
  password: string;
}

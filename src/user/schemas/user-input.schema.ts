import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

@Exclude()
export class UserInputSchema {
  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsEmail()
  email: string;
}

import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponseSchema {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;
}

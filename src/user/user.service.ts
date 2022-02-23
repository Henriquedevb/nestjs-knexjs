import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

@Injectable()
export class UserService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  create() {
    return 'This action adds a new user';
  }

  async findAll() {
    const users = await this.knex.table('usuarios');
    return { users };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { UserInputSchema } from './schemas/user-input.schema';

//regras do knex
@Injectable()
export class UserService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findAll() {
    return await this.knex.table('usuarios');
  }

  async findOne(id: number) {
    return await this.knex.table('usuarios').where('id', id);
  }

  async create({ email, username }: UserInputSchema) {
    return this.knex('usuarios')
      .insert({ email, username })
      .into('usuarios')
      .returning('');
  }

  async update(id: number, { email, username }: UserInputSchema) {
    return await this.knex
      .table('usuarios')
      .where('id', id)
      .update({ email, username })
      .returning('');
  }

  async remove(id: number) {
    return await this.knex
      .table('usuarios')
      .where('id', id)
      .delete()
      .returning('');
  }
}

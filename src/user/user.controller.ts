import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { UserInputSchema } from './schemas/user-input.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUser: UserInputSchema) {
    return this.userService.create(createUser);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatedUser: UserInputSchema) {
    return this.userService.update(id, updatedUser);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}

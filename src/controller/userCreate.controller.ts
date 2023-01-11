import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { CreateUserUsecase } from 'src/use-cases/user/createUser-use-case.ts';

@Controller('/user')
export class UserCreateController {
  constructor(private readonly createUserUsecase: CreateUserUsecase) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.createUserUsecase.create(data);
  }
}

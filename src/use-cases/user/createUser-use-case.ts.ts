import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstract/data-service.abstract';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class CreateUserUsecase {
  constructor(
    private dataServices: IDataServices,
    private userFactory: UserFactoryService,
  ) {}

  async create(data: CreateUserDto) {
    const user = await this.userFactory.createNewUser(data);
    const newUser = await this.dataServices.users.create(user);
    return newUser;
  }
}

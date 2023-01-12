import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstract/data-service.abstract';
import { IEncrypter } from 'src/core/abstract/encrypter';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class CreateUserUsecase {
  constructor(
    private dataServices: IDataServices,
    private userFactory: UserFactoryService,
    private encrypter: IEncrypter,
  ) {}

  async create(data: CreateUserDto) {
    const user = await this.userFactory.createNewUser(data);
    const hashedPassword = await this.encrypter.genHash(user.password);
    user.password = hashedPassword;
    const newUser = await this.dataServices.users.create(user);
    return newUser;
  }
}

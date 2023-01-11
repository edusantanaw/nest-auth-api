import { Injectable } from '@nestjs/common';
import { Encrypter } from 'src/core/abstract/encrypter';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { User } from 'src/core/entities/user.entity';

@Injectable()
export class UserFactoryService {
  constructor(private encrypter: Encrypter) {}
  async createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    const hashedPassword = await this.encrypter.genHash(createUserDto.password);
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = hashedPassword;
    return newUser;
  }
}

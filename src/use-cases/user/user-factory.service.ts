import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { User } from 'src/core/entities/user.entity';
import { Encrypter } from 'src/helpers/Encrypter';

const encrypter = new Encrypter();

@Injectable()
export class UserFactoryService {
  async createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    const hashedPassword = await encrypter.genHash(createUserDto.password);
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = hashedPassword;
    return newUser;
  }
}

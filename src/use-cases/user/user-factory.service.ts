import { Injectable } from '@nestjs/common';
import { EncrypterService } from 'src/core/abstract/encrypter-service';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { User } from 'src/core/entities/user.entity';

@Injectable()
export class UserFactoryService {
  constructor(private encrypter: EncrypterService) {}
  async createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    const hashedPassword = await this.encrypter.genHash(createUserDto.password);
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = hashedPassword;
    return newUser;
  }
}

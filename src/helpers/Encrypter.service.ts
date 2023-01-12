import { genSalt, hash } from 'bcrypt';
import { IEncrypter } from 'src/core/abstract/encrypter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Encrypter implements IEncrypter {
  private readonly rounds: number = 10;
  async genHash(password: string): Promise<string> {
    const salt = await genSalt(this.rounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  }
}

import { Encrypter } from 'src/core/abstract/encrypter';
import { genSalt, hash } from 'bcrypt';

export class Encryptr implements Encrypter {
  private readonly rounds: number = 10;

  async genHash(password: string): Promise<string> {
    const salt = await genSalt(this.rounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  }
}

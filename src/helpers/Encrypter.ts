import { genSalt, hash } from 'bcrypt';

export class Encrypter {
  private readonly rounds: number = 10;
  async genHash(password: string): Promise<string> {
    const salt = await genSalt(this.rounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  }
}

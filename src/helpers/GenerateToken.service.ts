import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { promisify } from 'node:util';

@Injectable()
export class GenerateToken {
  secret = 'any_secret';
  async generate(userId: string): Promise<string> {
    const token = await promisify(jwt.sign)(userId, this.secret);
    return token as string;
  }
}

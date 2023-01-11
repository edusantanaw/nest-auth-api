import { IUser } from '../interfaces/user';

export class User implements IUser {
  name: string;
  email: string;
  password: string;
}

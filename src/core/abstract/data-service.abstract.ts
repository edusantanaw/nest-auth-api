import { User } from '../entities/user.entity';
import { IGenericRepository } from './user.repository';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
}

import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core/abstract/user.repository';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private repository: Model<T>;

  constructor(repositoy: Model<T>) {
    this.repository = repositoy;
  }

  async create<T>(data: T): Promise<T> {
    const created = await this.repository.create(data);
    return created as T;
  }
}

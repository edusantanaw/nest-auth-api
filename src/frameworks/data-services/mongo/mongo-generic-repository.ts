import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core/abstract/user.repository';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;

  constructor(repositoy: Model<T>) {
    this._repository = repositoy;
  }

  async create(data: T): Promise<T> {
    const created = await this._repository.create(data);
    return created as T;
  }
}

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDataServices } from '../../../core/abstract/data-service.abstract';
import { User } from './model/user.model';
import { MongoGenericRepository } from './mongo-generic-repository';

@Injectable()
export class MongoDataService implements IDataServices, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;

  constructor(@InjectModel(User.name) private userRepository) {}

  onApplicationBootstrap() {
    this.userRepository = new MongoGenericRepository<User>(this.userRepository);
  }
}

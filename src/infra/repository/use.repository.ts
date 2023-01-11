import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class UserRepoository {
  async create() {
    console.log('create');
  }
}

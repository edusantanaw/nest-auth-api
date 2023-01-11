import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from 'src/infra/core/abstract/data-service.abstract';
import { User, UserSchema } from './model/user.model';
import { MongoDataService } from './mongo-data-service.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataService,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServiceModule {}

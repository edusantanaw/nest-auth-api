import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services.module';
import { UserFactoryService } from './user-factory.service';
import { CreateUserUsecase } from './createUser-use-case.ts';
import { Encrypter } from 'src/helpers/Encrypter';

@Module({
  imports: [DataServicesModule, Encrypter],
  providers: [UserFactoryService, CreateUserUsecase],
  exports: [UserFactoryService, CreateUserUsecase],
})
export class UserUseCasesModule {}

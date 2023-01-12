import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services.module';
import { UserFactoryService } from './user-factory.service';
import { CreateUserUsecase } from './createUser-use-case.ts';
import { EncrypterModule } from 'src/helpers/Encrypter.module';

@Module({
  imports: [DataServicesModule, EncrypterModule],
  providers: [UserFactoryService, CreateUserUsecase],
  exports: [UserFactoryService, CreateUserUsecase],
})
export class UserUseCasesModule {}

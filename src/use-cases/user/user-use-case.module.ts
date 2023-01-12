import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services.module';
import { UserFactoryService } from './user-factory.service';
import { CreateUserUsecase } from './createUser-use-case.ts';
import { HelperModule } from 'src/helpers/Helpers.module';

@Module({
  imports: [DataServicesModule, HelperModule],
  providers: [UserFactoryService, CreateUserUsecase],
  exports: [UserFactoryService, CreateUserUsecase],
})
export class UserUseCasesModule {}

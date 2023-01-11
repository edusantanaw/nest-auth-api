import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services.module';
import { UserFactoryService } from './user-factory.service';
import { CreateUserUsecase } from './user-use-case';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, CreateUserUsecase],
  exports: [UserFactoryService, CreateUserUsecase],
})
export class UserUseCasesModule {}

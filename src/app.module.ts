import { Module } from '@nestjs/common';
import { UserCreateController } from './controller/userCreate.controller';
import { UserUseCasesModule } from './use-cases/user/user-use-case.module';

@Module({
  imports: [UserUseCasesModule],
  controllers: [UserCreateController],
  providers: [],
})
export class AppModule {}

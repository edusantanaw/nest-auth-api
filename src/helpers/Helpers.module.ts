import { Module } from '@nestjs/common';
import { IEncrypter } from 'src/core/abstract/encrypter';
import { IGenerateToken } from 'src/core/abstract/generateToken';
import { Encrypter } from './Encrypter.service';
import { GenerateToken } from './GenerateToken.service';

@Module({
  providers: [
    {
      provide: IEncrypter,
      useClass: Encrypter,
    },
    {
      provide: IGenerateToken,
      useClass: GenerateToken,
    },
  ],
  exports: [IEncrypter, IGenerateToken],
})
export class HelperModule {}

import { Module } from '@nestjs/common';
import { IEncrypter } from 'src/core/abstract/encrypter';
import { Encrypter } from './Encrypter.service';

@Module({
  providers: [
    {
      provide: IEncrypter,
      useClass: Encrypter,
    },
  ],
  exports: [IEncrypter],
})
export class HelperModule {}

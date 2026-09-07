import { Module } from '@nestjs/common';

import { JornadaDeMissasRepository } from './repositories';
import { JornadaDeMissasService } from './services';
import { ImpawnJornadaDeMissasUseCase } from './useCase';
import { JornadaDeMissasController } from './controllers';
import { PrismaService } from './services/prismaService';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [JornadaDeMissasController],
  providers: [
    JornadaDeMissasRepository,
    JornadaDeMissasService,
    ImpawnJornadaDeMissasUseCase,
    PrismaService,
  ],
})
export class AppModule {}

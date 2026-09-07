import { Module } from '@nestjs/common';

import { PrismaService } from './services/prismaService';
import { ConfigModule } from '@nestjs/config';
import { JornadaDeMissasRepository } from './repositories/jornadaDeMissasRepository';
import { JornadaDeMissasService } from './services/JornadaDeMIssasService';
import { ImpawnJornadaDeMissasUseCase } from './useCase/impawnJornadaDeMissasUseCase';
import { UsersRepository } from './repositories/usersRepository';
import { UsersService } from './services/usersService';
import { createUserUseCase } from './useCase/createUserUseCase';
import { JornadaDeMissasController } from './controllers/jornadaDeMIssas';
import { UsersController } from './controllers/users';
import { loginUserUseCase } from './useCase/loginUserUseCase';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwtConstant';
import { AuthGuard } from './auth/authGuard';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2d' },
    }),
  ],
  controllers: [JornadaDeMissasController, UsersController],
  providers: [
    JornadaDeMissasRepository,
    JornadaDeMissasService,
    ImpawnJornadaDeMissasUseCase,
    PrismaService,
    UsersRepository,
    UsersService,
    createUserUseCase,
    loginUserUseCase,
    AuthGuard,
  ],
})
export class AppModule {}

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import type { User } from '../interfaces/UsersRepository';
import { createUserUseCase } from '../useCase/createUserUseCase';
import { loginUserUseCase } from '../useCase/loginUserUseCase';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: createUserUseCase,
    private readonly loginUserUseCase: loginUserUseCase,
  ) {}

  @Post('/createUser')
  @HttpCode(HttpStatus.CREATED)
  impawn(@Body() body: User) {
    return this.createUserUseCase.execute(body);
  }

    @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() body: Record<string, any>) {
    return this.loginUserUseCase.execute(body);
  }
}

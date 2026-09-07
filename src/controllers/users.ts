import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import type { User } from '../interfaces/UsersRepository';
import { createUserUseCase } from '../useCase/createUserUseCase';
import { loginUserUseCase } from '../useCase/loginUserUseCase';
import { AuthGuard } from '../auth/authGuard';
import { Request as ExpressRequest } from 'express';

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

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: ExpressRequest  & { user: any }) {
    return req.user;
  }
}

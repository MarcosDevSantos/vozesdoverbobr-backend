import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ImpawnJornadaDeMissasUseCase } from '../useCase';

@Controller('/jornadaDeMissas')
export class JornadaDeMissasController {
  constructor(
    private readonly impawnJornadaDeMissasUseCase: ImpawnJornadaDeMissasUseCase,
  ) {}

  @Post('/impawn')
  @HttpCode(HttpStatus.OK)
  impawn(@Body() body: { name: string; date: Date }) {
    return this.impawnJornadaDeMissasUseCase.execute(body.name, body.date);
  }
}

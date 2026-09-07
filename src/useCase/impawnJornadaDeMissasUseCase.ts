import { Injectable } from '@nestjs/common';
import { JornadaDeMissasService } from '../services';

@Injectable()
export class ImpawnJornadaDeMissasUseCase {
  constructor(
    private readonly jornadaDeMissasService: JornadaDeMissasService,
  ) {}

  async execute(name: string, date: Date) {
    return await this.jornadaDeMissasService.impawn(name, date);
  }
}

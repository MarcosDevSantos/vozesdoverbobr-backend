import { Injectable } from '@nestjs/common';
import { JornadaDeMissasRepository } from '../repositories/jornadaDeMissasRepository';


@Injectable()
export class JornadaDeMissasService {
  constructor(private jornadaDeMissasRepository: JornadaDeMissasRepository) {}

  public impawn(name: string, date: Date) {
    return this.jornadaDeMissasRepository.impawn(name, date);
  }
}

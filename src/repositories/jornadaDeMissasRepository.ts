import { Injectable } from '@nestjs/common';

import { JornadaDeMissasRepositoryInterface } from '../interfaces/JornadaDeMIssasRepository';
import { PrismaService } from '../services/prismaService';

@Injectable()
export class JornadaDeMissasRepository implements JornadaDeMissasRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async impawn(name: string, date: Date) {
    try {
      await this.prismaService.jornadaDeMissas.create({
        data: {
          name,
          date: date,
        },
      });

      return {
        success: true,
      };
    } catch (e: any) {
      console.error(e);
      throw new Error(e);
    }
  }
}

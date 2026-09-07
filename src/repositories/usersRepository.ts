import { Injectable } from '@nestjs/common';

import { PrismaService } from '../services/prismaService';
import { User, UsersRepositoryInterface } from '../interfaces/UsersRepository';

@Injectable()
export class UsersRepository implements UsersRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async createUser(user: User) {
    try {
      await this.prismaService.user.create({
        data: {
          nome: user.nome,
          email: user.email,
          telefone: user.telefone,
          password: user.senha,
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

  public async findOne(email: string){
    return await this.prismaService.user.findUnique({
        where: {
            email: email
        }
    })
  }
}

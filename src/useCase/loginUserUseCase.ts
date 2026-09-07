import { Injectable } from '@nestjs/common';
import { JornadaDeMissasService } from '../services/JornadaDeMIssasService';
import { UsersService } from '../services/usersService';
import { User } from '../interfaces/UsersRepository';


@Injectable()
export class loginUserUseCase {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  async execute(body: Record<string, any>) {
    return await this.usersService.login(body.email, body.password);
  }
}

import { Injectable } from '@nestjs/common';
import { JornadaDeMissasService } from '../services/JornadaDeMIssasService';
import { UsersService } from '../services/usersService';
import { User } from '../interfaces/UsersRepository';

@Injectable()
export class createUserUseCase {
  constructor(private readonly usersService: UsersService) {}

  async execute(user: User) {
    return await this.usersService.createUser(user);
  }
}

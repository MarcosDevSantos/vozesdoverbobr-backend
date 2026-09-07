import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../repositories/usersRepository';
import { User } from '../interfaces/UsersRepository';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async login(email: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOne(email);

     if (!user?.email) {
      return;
    }

    const validPassword = await argon2.verify(user?.password, pass)
    if (!validPassword) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  public async createUser(user: User) {

    const formattedUser = {
        ...user,
        senha: await argon2.hash(user.senha)
    }

    return this.usersRepository.createUser(formattedUser);
  }


  public async findOne(email:string){
    return await this.usersRepository.findOne(email)
  }
}

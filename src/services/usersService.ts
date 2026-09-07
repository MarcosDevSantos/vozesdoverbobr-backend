import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../repositories/usersRepository';
import { User } from '../interfaces/UsersRepository';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersRepository.findOne(email);

    if (!user?.email) {
      throw new UnauthorizedException('user_not_found');
    }

    const validPassword = await argon2.verify(user?.password, pass);
    if (!validPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.nome };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  public async createUser(user: User) {
    const formattedUser = {
      ...user,
      senha: await argon2.hash(user.senha),
    };

    return this.usersRepository.createUser(formattedUser);
  }

  public async findOne(email: string) {
    return await this.usersRepository.findOne(email);
  }
}

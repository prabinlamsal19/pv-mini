import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    const newUser = this.userRepository.create({ ...user });
    return this.userRepository.save(newUser);
  }

  async findUserByName(name: string): Promise<User | null> {
    return this.userRepository.findOneBy({ name });
  }
}

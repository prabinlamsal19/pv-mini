import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body('name') name: string, @Body('email') email: string) {
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;

    const user = await this.userService.createUser(newUser);
    return { message: 'User created successfully', user };
  }

  @Get(':name')
  async getUserByName(@Param('name') name: string) {
    const user = await this.userService.findUserByName(name);
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }
}

//So, I can notice that the a lot of the vallidation part is done in the controller itself.
// Let's see how we can use pipes or dtos to reduce the vallidation part here. LATER

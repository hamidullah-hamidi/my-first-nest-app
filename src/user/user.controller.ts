import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-uesr.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET user
  @Get()
  getUsers(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);
  }

  // GET user by id
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'hamid' };
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return { data: CreateUserDto, message: 'User created successfully' };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return {
      data: { id, ...UpdateUserDto },
      message: 'User updated successfully',
    };
  }
}

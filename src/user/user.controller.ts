import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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
  getUserById(@Param('id', ParseIntPipe) id: number): unknown {
    return this.userService.findUserById(id);
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto): unknown {
    return this.userService.createUser(CreateUserDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ): unknown {
    return this.userService.updateUser(id, UpdateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): unknown {
    return this.userService.deleteUser(id);
  }
}

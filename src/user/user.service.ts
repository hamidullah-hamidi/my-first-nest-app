import { Injectable, NotFoundException } from '@nestjs/common';
import { LogService } from './user.logger.js';
import { CreateUserDto } from './dto/create-uesr.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LogService) {}

  private users: User[] = [
    { id: 1, name: 'hamid', email: 'hamid@gmail.com' },
    { id: 2, name: 'yaser', email: 'yaser@gmail.com' },
    { id: 3, name: 'yaser', email: 'yaser@gmail.com' },
  ];

  findAllUsers(name?: string) {
    this.logger.log('Finding all users');

    if (!name) {
      return this.users;
    }

    return this.users.filter((user) => user.name === name);
  }

  findUserById(id: number) {
    this.logger.log(`Finding user with id ${id}`);

    const user = this.users.find((user) => user.id === Number(id));
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    this.logger.log('Creating user');

    const nextId = Math.max(0, ...this.users.map((user) => user.id)) + 1;
    const user: User = {
      id: nextId,
      name: createUserDto.name,
      email: createUserDto.email,
    };
    this.users.push(user);

    return { data: user, message: 'User created successfully' };
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log(`Updating user with id ${id}`);

    const user = this.findUserById(id);
    if (updateUserDto.name !== undefined) user.name = updateUserDto.name;
    if (updateUserDto.email !== undefined) user.email = updateUserDto.email;

    return { data: user, message: 'User updated successfully' };
  }

  deleteUser(id: number) {
    this.logger.log(`Deleting user with id ${id}`);

    const user = this.findUserById(id);
    this.users = this.users.filter((u) => u.id !== user.id);

    return { data: user, message: 'User deleted successfully' };
  }
}

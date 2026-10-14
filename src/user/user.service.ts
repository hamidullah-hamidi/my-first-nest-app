import { Injectable } from '@nestjs/common';
import { LogService } from './user.logger.js';

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

  findAllUsers(name: string = '') {
    this.logger.log('Finding all users');

    return this.users.filter((user) => user.name === name);
  }
}

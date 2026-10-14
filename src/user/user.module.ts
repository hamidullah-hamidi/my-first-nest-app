import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { LogService } from './user.logger.js';

@Module({
  controllers: [UserController],
  providers: [UserService, LogService],
})
export class UserModule {}

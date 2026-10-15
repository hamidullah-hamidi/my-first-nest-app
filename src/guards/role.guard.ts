import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();
    const role = req.headers['admin'];

    if (role !== 'admin')
      throw new UnauthorizedException(
        'You are not allowed to perform this action',
      );

    return true;
  }
}

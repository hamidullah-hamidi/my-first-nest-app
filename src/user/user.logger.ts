import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  log(message: string) {
    console.log('[LOG]', message);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class PlutofundService {
  getHello(): string {
    return 'Hello World!';
  }
}

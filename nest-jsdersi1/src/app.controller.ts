import { Controller, Get } from '@nestjs/common';

@Controller('ders1')
export class AppController {
  @Get()
  deneme(): string {
    return 'test1';
  }
}

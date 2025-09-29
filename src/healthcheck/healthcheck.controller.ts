import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
  @Get()
  getStatus(): string {
    return 'Hello World!';
  }
}

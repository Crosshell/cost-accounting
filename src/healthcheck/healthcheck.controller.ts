import { Controller, Get } from '@nestjs/common';
import { ServerStatus } from './types/server-status';

@Controller('healthcheck')
export class HealthcheckController {
  @Get()
  getHealthcheck(): ServerStatus {
    return {
      date: new Date(),
      status: 'ok',
    };
  }
}

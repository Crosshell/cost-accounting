import { Controller, Get } from '@nestjs/common';
import { ServerStatus } from './types/server-status';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('healthcheck')
export class HealthcheckController {
  @ApiOkResponse({ type: ServerStatus })
  @Get()
  getHealthcheck(): ServerStatus {
    return {
      date: new Date(),
      status: 'ok',
    };
  }
}

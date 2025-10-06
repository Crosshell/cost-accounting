import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { Record } from './entities/record';
import { CreateRecordDto } from './dto/create-record.dto';
import { FindRecordsDto } from './dto/find-records.dto';

@Controller('record')
export class RecordController {
  constructor(private readonly service: RecordService) {}

  @Get(':id')
  getById(@Param('id') id: string): Record | string {
    return this.service.getById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): string {
    return this.service.deleteById(id);
  }

  @Post()
  create(@Body() dto: CreateRecordDto): Record {
    return this.service.create(dto);
  }

  @Get()
  find(@Query() dto: FindRecordsDto): Record[] {
    return this.service.find(dto);
  }
}

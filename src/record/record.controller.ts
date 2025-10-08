import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { Record } from '@prisma/client';
import { CreateRecordDto } from './dto/create-record.dto';
import { FindRecordsDto } from './dto/find-records.dto';

@Controller('record')
export class RecordController {
  constructor(private readonly service: RecordService) {}

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Record> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<Record> {
    return this.service.delete(id);
  }

  @Post()
  async create(@Body() dto: CreateRecordDto): Promise<Record> {
    return this.service.create(dto);
  }

  @Get()
  async findMany(@Query() dto: FindRecordsDto): Promise<Record[]> {
    return this.service.findMany(dto);
  }
}

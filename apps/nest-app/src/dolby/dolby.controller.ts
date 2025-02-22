import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { DolbyService } from './dolby.service';
import { CreateDolbyDto } from './dto/create-dolby.dto';

@Controller('dolby')
export class DolbyController {
  constructor(private readonly dolbyService: DolbyService) {}

  @Post()
  create(@Body() createDolbyDto: CreateDolbyDto) {
    return this.dolbyService.create(createDolbyDto);
  }

  @Get()
  findAll() {
    return this.dolbyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dolbyService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dolbyService.remove(+id);
  }
}

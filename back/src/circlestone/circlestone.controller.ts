import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CirclestoneService } from './circlestone.service';
import { CreateCirclestoneDto } from './dto/create-circlestone.dto';
import { UpdateCirclestoneDto } from './dto/update-circlestone.dto';

@Controller('circlestone')
export class CirclestoneController {
  constructor(private readonly circlestoneService: CirclestoneService) {}

  @Post()
  create(@Body() createCirclestoneDto: CreateCirclestoneDto) {
    return this.circlestoneService.create(createCirclestoneDto);
  }

  @Get()
  findAll() {
    return this.circlestoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.circlestoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCirclestoneDto: UpdateCirclestoneDto) {
    return this.circlestoneService.update(+id, updateCirclestoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.circlestoneService.remove(+id);
  }
}

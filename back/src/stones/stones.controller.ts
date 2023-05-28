import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StonesService } from './stones.service';
import { CreateStoneDto } from './dto/create-stone.dto';
import { UpdateStoneDto } from './dto/update-stone.dto';

@Controller('stones')
export class StonesController {
  constructor(private readonly stonesService: StonesService) {}

  @Post()
  create(@Body() createStoneDto: CreateStoneDto) {
    return this.stonesService.create(createStoneDto);
  }

  @Get()
  findAll() {
    return this.stonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stonesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoneDto: UpdateStoneDto) {
    return this.stonesService.update(+id, updateStoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stonesService.remove(+id);
  }
}

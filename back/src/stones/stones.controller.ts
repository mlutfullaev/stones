import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StonesService } from './stones.service';
import { CreateStoneDto } from './dto/create-stone.dto';
import { UpdateStoneDto } from './dto/update-stone.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('stones')
export class StonesController {
  constructor(private readonly stonesService: StonesService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createStoneDto: CreateStoneDto) {
    return this.stonesService.create(createStoneDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.stonesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.stonesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateStoneDto: UpdateStoneDto) {
    return this.stonesService.update(+id, updateStoneDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.stonesService.remove(+id);
  }
}

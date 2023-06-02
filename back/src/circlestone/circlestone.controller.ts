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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CirclestoneService } from './circlestone.service';
import { CreateCirclestoneDto } from './dto/create-circlestone.dto';
import { UpdateCirclestoneDto } from './dto/update-circlestone.dto';

@Controller('circlestone')
export class CirclestoneController {
  constructor(private readonly circlestoneService: CirclestoneService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateCirclestoneDto: UpdateCirclestoneDto,
  ) {
    return this.circlestoneService.update(+id, updateCirclestoneDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.circlestoneService.remove(+id);
  }
}

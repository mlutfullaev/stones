import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../util/uploadConfig';
import { UploadEntity } from './entities/upload.entity';
import { Response } from 'express';
import { Prisma } from '@prisma/client';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  // if you want get by file name
  @Get('file/:fileName')
  async getFileByName(@Param('fileName') fileName, @Res() res: Response) {
    const file = await this.uploadService.getFileByName(fileName);
    file.pipe(res);
  }

  // if you want get by file id
  @Get('fayl/:id')
  async getFileById(@Param('id') id, @Res() res: Response) {
    id = Math.floor(id);
    const file = await this.uploadService.getFileByFayl(id);
    file.pipe(res);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  upload(@UploadedFile() file: Prisma.UploadedFileCreateInput) {
    return this.uploadService.create(file);
  }

  create(@Body() createUploadDto: Prisma.UploadedFileCreateInput) {
    return this.uploadService.create(createUploadDto);
  }

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}

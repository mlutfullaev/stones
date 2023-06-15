import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from '../prisma/prisma.service';
import { join } from 'path';
import { createReadStream } from 'fs';
import * as fs from 'fs';
import any = jasmine.any;

const sharp = require('sharp');

@Injectable()
export class UploadService {
  constructor(private prismaService: PrismaService) { }

  create(createUploadDto: Prisma.UploadedFileCreateInput) {
    // Если мне нужно мини картинку
    // if (createUploadDto.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
    //   const filePath = fs.readFileSync(createUploadDto.path)
    //   sharp(filePath).resize(64, 64).toFile(createUploadDto.destination+"/mini_"+createUploadDto.filename);
    //   createUploadDto.nameMini = "mini_"+createUploadDto.filename
    // }
    return this.prismaService.uploadedFile.create({ data: createUploadDto });
  }

  findAll() {
    return this.prismaService.uploadedFile.findMany();
  }

  findOne(id: number) {
    return this.prismaService.uploadedFile.findUnique({ where: { id } });
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return this.prismaService.uploadedFile.update({
      data: updateUploadDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.uploadedFile.delete({ where: { id } });
  }

  async getFileByName(fileName: string) {
    let file = await this.prismaService.uploadedFile.findUnique({
      where: { filename: fileName },
    });
    return createReadStream(join(file.path));
  }

  async getFileNameById(id: number) {
    const file = await this.prismaService.uploadedFile.findUnique({
      where: { id },
    });
    return createReadStream(join(file.filename));
  }

  async getFileByFayl(id: number) {
    id = Math.floor(id);
    let file = await this.prismaService.uploadedFile.findUnique({
      where: { id },
    });
    return createReadStream(join(file.path));
  }
}

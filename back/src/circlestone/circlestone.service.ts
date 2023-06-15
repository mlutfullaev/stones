import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCirclestoneDto } from './dto/create-circlestone.dto';
import { UpdateCirclestoneDto } from './dto/update-circlestone.dto';

@Injectable()
export class CirclestoneService {
  constructor(private prismaService: PrismaService) { }
  create(createCirclestoneDto: CreateCirclestoneDto) {
    return this.prismaService.circlestone.create({
      data: createCirclestoneDto,
    });
  }

  findAll() {
    return this.prismaService.circlestone.findMany({
      include: { uploadedFile: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.circlestone.findUnique({
      where: { id },
      include: { uploadedFile: true },
    });
  }

  update(id: number, updateCirclestoneDto: UpdateCirclestoneDto) {
    return this.prismaService.circlestone.update({
      where: { id },
      data: updateCirclestoneDto,
    });
  }

  remove(id: number) {
    return this.prismaService.circlestone.delete({ where: { id } });
  }
}

wimport { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoneDto } from './dto/create-stone.dto';
import { UpdateStoneDto } from './dto/update-stone.dto';

@Injectable()
export class StonesService {
  constructor(private prismaService: PrismaService) { }
  create(createStoneDto: CreateStoneDto) {
    return this.prismaService.stone.create({ data: createStoneDto });
  }

  findAll() {
    return this.prismaService.stone.findMany({
      include: { uploadedFile: true, category: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.stone.findUnique({ where: { id }, include: {category: true, uploadedFile: true} });
  }

  update(id: number, updateStoneDto: UpdateStoneDto) {
    return this.prismaService.stone.update({
      where: { id },
      data: updateStoneDto,
    });
  }

  remove(id: number) {
    return this.prismaService.stone.delete({ where: { id } });
  }
}

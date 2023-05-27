import { Injectable } from '@nestjs/common';
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
    return this.prismaService.stone.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} stone`;
  }

  update(id: number, updateStoneDto: UpdateStoneDto) {
    return `This action updates a #${id} stone`;
  }

  remove(id: number) {
    return `This action removes a #${id} stone`;
  }
}

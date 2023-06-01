import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(private prismaService: PrismaService) { }
  create(createServiceDto: CreateServiceDto) {
    return this.prismaService.services.create({ data: createServiceDto });
  }

  findAll() {
    return this.prismaService.services.findMany({
      include: { uploadedFile: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.services.findUnique({
      where: { id },
      include: { uploadedFile: true },
    });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.prismaService.services.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  remove(id: number) {
    return this.prismaService.services.delete({ where: { id } });
  }
}

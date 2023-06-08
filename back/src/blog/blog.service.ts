import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prismaService: PrismaService){}
  create(createBlogDto: CreateBlogDto) {
    return this.prismaService.blog.create({data: createBlogDto});
  }

  findAll() {
    return this.prismaService.blog.findMany({
      include: { uploadedFile: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.blog.findUnique({where: {id}, include: { uploadedFile: true },});
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prismaService.blog.update({where: {id}, data: updateBlogDto})
  }

  remove(id: number) {
    return this.prismaService.blog.delete({where: {id}})
  }
}

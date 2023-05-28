import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prismaService: PrismaService) { }
  create(createReviewDto: CreateReviewDto) {
    return this.prismaService.reviews.create({ data: createReviewDto });
  }

  findAll() {
    return this.prismaService.reviews.findMany();
  }

  findOne(id: number) {
    return this.prismaService.reviews.findUnique({ where: { id } });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prismaService.reviews.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  remove(id: number) {
    return this.prismaService.reviews.delete({ where: { id } });
  }
}

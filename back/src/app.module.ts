import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StonesModule } from './stones/stones.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [PrismaModule, StonesModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StonesModule } from './stones/stones.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ServiceModule } from './service/service.module';
import { UploadModule } from './upload/upload.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    StonesModule,
    ReviewsModule,
    ServiceModule,
    UploadModule,
    UsersModule,
    AuthModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

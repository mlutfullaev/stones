import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StonesModule } from './stones/stones.module';

@Module({
  imports: [PrismaModule, StonesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

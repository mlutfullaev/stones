import { Module } from '@nestjs/common';
import { StonesService } from './stones.service';
import { StonesController } from './stones.controller';

@Module({
  controllers: [StonesController],
  providers: [StonesService]
})
export class StonesModule {}

import { Module } from '@nestjs/common';
import { CirclestoneService } from './circlestone.service';
import { CirclestoneController } from './circlestone.controller';

@Module({
  controllers: [CirclestoneController],
  providers: [CirclestoneService]
})
export class CirclestoneModule {}

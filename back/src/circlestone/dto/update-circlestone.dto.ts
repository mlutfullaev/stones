import { PartialType } from '@nestjs/mapped-types';
import { CreateCirclestoneDto } from './create-circlestone.dto';

export class UpdateCirclestoneDto extends PartialType(CreateCirclestoneDto) {}

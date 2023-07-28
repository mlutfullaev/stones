import { PartialType } from '@nestjs/mapped-types';
import { CreateStoneDto } from './create-stone.dto';

export class UpdateStoneDto extends PartialType(CreateStoneDto) {}

import { SetMetadata } from '@nestjs/common';

export const Me = (...args: string[]) => SetMetadata('me', args);

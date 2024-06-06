import { PartialType } from '@nestjs/mapped-types';
import { CreateDhanaAuthDto } from './welcome-dhana-auth.dto';

export class UpdateDhanaAuthDto extends PartialType(CreateDhanaAuthDto) {}

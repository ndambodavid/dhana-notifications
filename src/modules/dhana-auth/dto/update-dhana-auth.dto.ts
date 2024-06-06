import { PartialType } from '@nestjs/mapped-types';
import { CreateDhanaAuthDto } from './create-dhana-auth.dto';

export class UpdateDhanaAuthDto extends PartialType(CreateDhanaAuthDto) {}

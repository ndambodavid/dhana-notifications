import { PartialType } from '@nestjs/mapped-types';
import { WelcomeDhanaAuthDto } from './welcome-dhana-auth.dto';

export class UpdateDhanaAuthDto extends PartialType(WelcomeDhanaAuthDto) {}

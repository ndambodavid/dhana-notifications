import { Module } from '@nestjs/common';
import { DhanaAuthService } from './dhana-auth.service';
import { DhanaAuthController } from './dhana-auth.controller';

@Module({
  controllers: [DhanaAuthController],
  providers: [DhanaAuthService],
})
export class DhanaAuthModule {}

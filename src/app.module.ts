import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailRestModule } from './email-rest/email-rest.module';

@Module({
  imports: [EmailRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

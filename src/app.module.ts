import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailRestModule } from './modules/email-rest/email-rest.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DhanaAuthModule } from './modules/dhana-auth/dhana-auth.module';
import { TypedEventEmitterModule } from './event-emitter/typed-event-emitter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EmailRestModule,
    DhanaAuthModule,
    TypedEventEmitterModule,
    EventEmitterModule.forRoot(),
    // ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

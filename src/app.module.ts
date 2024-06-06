import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailRestModule } from './modules/email-rest/email-rest.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DhanaAuthModule } from './modules/dhana-auth/dhana-auth.module';
import { TypedEventEmitterModule } from './event-emitter/typed-event-emitter.module';

@Module({
  imports: [
    EmailRestModule,
    DhanaAuthModule,
    TypedEventEmitterModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { EmailRestService } from './email-rest.service';
import { EmailRestController } from './email-rest.controller';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import path, { join } from 'path';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRoot({
      // useFactory: async (config: ConfigService) => ({
        transport: {
          host: 'mail.vincowoods.com',
          port: 465,
          secure: true,
          auth: {
            user: 'ndambodavid@vincowoods.com',
            pass: 'Ndambo@2024',
          },
        },
        defaults: {
          from: '"Dhana Remote" <ndambodavid@vincowoods.com>',
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      // })
    }),
  ],
  controllers: [EmailRestController],
  providers: [EmailRestService],
})
export class EmailRestModule {}

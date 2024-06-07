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
          host: process.env.SMTP_HOST,
          port: 467,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        },
        defaults: {
          from: '"Dhana Remote" <developersdhana@gmail.com>',
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

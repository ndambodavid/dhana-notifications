import { Module } from '@nestjs/common';
import { EmailRestService } from './email-rest.service';
import { EmailRestController } from './email-rest.controller';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: '<host>',
        port: Number('<port>'),
        secure: false,
        auth: {
          user: '<username>',
          pass: '<password>',
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
    }),
  ],
  controllers: [EmailRestController],
  providers: [EmailRestService],
})
export class EmailRestModule {}

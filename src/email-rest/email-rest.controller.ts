import { Controller } from '@nestjs/common';
import { EmailRestService } from './email-rest.service';

@Controller('email-rest')
export class EmailRestController {
  constructor(private readonly emailRestService: EmailRestService) {}
}

import { Test, TestingModule } from '@nestjs/testing';
import { EmailRestService } from './email-rest.service';

describe('EmailRestService', () => {
  let service: EmailRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailRestService],
    }).compile();

    service = module.get<EmailRestService>(EmailRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

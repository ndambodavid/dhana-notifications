import { Test, TestingModule } from '@nestjs/testing';
import { EmailRestController } from './email-rest.controller';
import { EmailRestService } from './email-rest.service';

describe('EmailRestController', () => {
  let controller: EmailRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailRestController],
      providers: [EmailRestService],
    }).compile();

    controller = module.get<EmailRestController>(EmailRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

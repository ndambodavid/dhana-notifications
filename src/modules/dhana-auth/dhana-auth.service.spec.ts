import { Test, TestingModule } from '@nestjs/testing';
import { DhanaAuthService } from './dhana-auth.service';

describe('DhanaAuthService', () => {
  let service: DhanaAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DhanaAuthService],
    }).compile();

    service = module.get<DhanaAuthService>(DhanaAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

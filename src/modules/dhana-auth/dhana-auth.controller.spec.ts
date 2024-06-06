import { Test, TestingModule } from '@nestjs/testing';
import { DhanaAuthController } from './dhana-auth.controller';
import { DhanaAuthService } from './dhana-auth.service';

describe('DhanaAuthController', () => {
  let controller: DhanaAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DhanaAuthController],
      providers: [DhanaAuthService],
    }).compile();

    controller = module.get<DhanaAuthController>(DhanaAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DolbyController } from './dolby.controller';
import { DolbyService } from './dolby.service';

describe('DolbyController', () => {
  let controller: DolbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DolbyController],
      providers: [DolbyService],
    }).compile();

    controller = module.get<DolbyController>(DolbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

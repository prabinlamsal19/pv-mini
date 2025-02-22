import { Test, TestingModule } from '@nestjs/testing';
import { DolbyService } from './dolby.service';

describe('DolbyService', () => {
  let service: DolbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DolbyService],
    }).compile();

    service = module.get<DolbyService>(DolbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

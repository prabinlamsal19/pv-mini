import { Controller } from '@nestjs/common';
import { DolbyService } from './dolby.service';

@Controller('dolby')
export class DolbyController {
  constructor(private readonly dolbyService: DolbyService) {}
}

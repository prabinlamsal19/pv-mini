import { Global, Module } from '@nestjs/common';
import { DolbyService } from './dolby.service';

@Global()
@Module({
  providers: [DolbyService],
})
export class DolbyModule {}

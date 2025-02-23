import { Global, Module } from '@nestjs/common';
import { DolbyService } from './dolby.service';
import { DolbyController } from './dolby.controller';

@Global()
@Module({
  controllers: [DolbyController],
  providers: [DolbyService],
})
export class DolbyModule {}

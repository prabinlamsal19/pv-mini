import { Module } from '@nestjs/common';
import { DolbyService } from './dolby.service';
import { DolbyController } from './dolby.controller';

@Module({
  controllers: [DolbyController],
  providers: [DolbyService],
})
export class DolbyModule {}

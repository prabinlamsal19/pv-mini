import { Global, Module } from '@nestjs/common';
import { SyncService } from './sync.service';

@Global()
@Module({
  providers: [SyncService],
})
export class SyncModule {}

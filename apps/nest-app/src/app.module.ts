import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SyncModule } from './dolby/sync.module';
import { SyncService } from './dolby/sync.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db-nest',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'mysecretpassword',
      database: process.env.POSTGRES_DB || 'nestDatabase',
      entities: [__dirname + '/**/entities/*{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    SyncModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'SyncModule',
      useClass: SyncService,
    },
  ],
  exports: ['DolbyService'],
})
export class AppModule {}

//They said, we don't need to do anything for providing and using SyncService, since its module is global.
//Remove the code if not useful

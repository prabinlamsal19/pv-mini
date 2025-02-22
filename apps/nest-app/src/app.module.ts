import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DolbyModule } from './dolby/dolby.module';

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
    DolbyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

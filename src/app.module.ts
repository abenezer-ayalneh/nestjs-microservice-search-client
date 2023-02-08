import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SearchModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      // To be able to use the '.env' file
      isGlobal: true, // To make it available to all modules (globally)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

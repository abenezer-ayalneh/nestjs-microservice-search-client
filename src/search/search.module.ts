import { Module } from '@nestjs/common';
import { IndexingSchedule } from './schedule/indexing.schedule';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, IndexingSchedule],
})
export class SearchModule {}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MeiliSearch } from 'meilisearch';
import movies from '../data/movies.json';

@Injectable()
export class IndexingSchedule {
  constructor(private config: ConfigService) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    console.log('Indexing Meilisearch...');
    const client = new MeiliSearch({
      host: this.config.get('MEILISEARCH_HOST'),
    });
    await client
      .index('movies')
      .addDocuments(movies)
      .then((enqueuedTask) => console.log(enqueuedTask));
  }
}

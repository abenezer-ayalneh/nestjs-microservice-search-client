import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MeiliSearch } from 'meilisearch';
import { SearchByNameRequest } from './requests/search.request';

@Injectable()
export class SearchService {
  constructor(private config: ConfigService) {}
  async searchByName(searchRequest: SearchByNameRequest) {
    const client = new MeiliSearch({
      host: this.config.get('MEILISEARCH_HOST'),
    });

    const result = await client
      .index(searchRequest.applicationName)
      .search(searchRequest.name, {
        limit: 30,
      });

    return result;
  }
}

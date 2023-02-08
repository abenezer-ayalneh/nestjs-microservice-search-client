import { Injectable } from '@nestjs/common';
import { EnqueuedTask, MeiliSearch } from 'meilisearch';
import users from './data/data.json';
import movies from './data/movies.json';
import { SearchByNameRequest } from './requests/search.request';

@Injectable()
export class SearchService {
  async searchByName(searchRequest: SearchByNameRequest) {
    const client = new MeiliSearch({ host: 'http://localhost:7700' });
    await client.index('movies').addDocuments(movies);

    const result = await client.index('movies').search(searchRequest.name, {
      limit: 30,
    });

    return result;
  }
}

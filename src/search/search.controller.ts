import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SearchByNameRequest } from './requests/search.request';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @GrpcMethod('SearchGrpcService', 'SearchByName')
  searchByName(searchRequest: SearchByNameRequest) {
    return this.searchService.searchByName(searchRequest);
  }
}

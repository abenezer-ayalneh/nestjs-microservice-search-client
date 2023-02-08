import { IsNotEmpty, IsString } from 'class-validator';

export class SearchByNameRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}

import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class SearchByNameRequest {
  @IsString({ message: 'Application name must be a string' })
  @IsNotEmpty({ message: 'Application name should not be empty' })
  applicationName: string;

  @IsString({ message: 'Name should be a string' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;
}

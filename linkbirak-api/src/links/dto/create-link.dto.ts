import { IsString, IsNotEmpty, IsUrl, IsOptional, IsArray } from 'class-validator';

export class CreateLinkDto {
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsOptional()
  tags?: string[];
} 
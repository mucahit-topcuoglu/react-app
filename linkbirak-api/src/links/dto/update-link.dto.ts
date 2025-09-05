import { IsString, IsNotEmpty, IsOptional, IsArray } from "class-validator";

export class UpdateLinkDto {
  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  tags?: string[];
}

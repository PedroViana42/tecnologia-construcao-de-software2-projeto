import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSessaoDto {
  @ApiProperty({ example: '2026-04-07T19:00:00.000Z' })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  horario: Date;

  @ApiProperty({ example: 25.0 })
  @IsNumber()
  @IsNotEmpty()
  valorIngresso: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  salaId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  filmeId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  cinemaId: number;
}


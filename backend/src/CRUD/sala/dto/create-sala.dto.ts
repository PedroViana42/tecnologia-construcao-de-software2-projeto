import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  numero: number;

  @ApiProperty({ example: 100 })
  @IsInt()
  @IsNotEmpty()
  capacidade: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  cinemaId: number;
}


import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateLancheComboDto {
  @ApiProperty({ example: 'Combo Popcorn Grande' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Pipoca grande + 2 refrigerantes' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: 45.0 })
  @IsNumber()
  @IsNotEmpty()
  preco: number;
}


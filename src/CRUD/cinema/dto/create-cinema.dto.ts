import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCinemaDto {
  @ApiProperty({ example: 'Cineart' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Belo Horizonte' })
  @IsString()
  @IsNotEmpty()
  localizacao: string;
}


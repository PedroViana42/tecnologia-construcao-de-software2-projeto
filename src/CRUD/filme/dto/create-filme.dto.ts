import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFilmeDto {
  @ApiProperty({ example: 'O Poderoso Chefão' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  generoId: number;

  @ApiProperty({ example: 175 })
  @IsInt()
  @IsNotEmpty()
  duracao: number;

  @ApiProperty({ example: '2026-04-07T00:00:00.000Z' })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  dataLancamento: Date;

  @ApiProperty({ example: '16+' })
  @IsString()
  @IsNotEmpty()
  classificacaoEtaria: string;
}


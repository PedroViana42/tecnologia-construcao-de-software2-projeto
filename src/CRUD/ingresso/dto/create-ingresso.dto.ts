import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateIngressoDto {
  @ApiProperty({ example: 'Inteira', enum: ['Inteira', 'Meia'] })
  @IsString()
  @IsNotEmpty()
  @IsEnum(['Inteira', 'Meia'])
  tipo: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  sessaoId: number;
}


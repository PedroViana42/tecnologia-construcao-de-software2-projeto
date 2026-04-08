import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsInt, IsOptional } from 'class-validator';

export class CreatePedidoDto {
  @ApiProperty({ example: 'João Silva' })
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @ApiProperty({ example: [1, 2], type: [Number] })
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  ingressoIds?: number[];

  @ApiProperty({ example: [1], type: [Number] })
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  lancheComboIds?: number[];
}


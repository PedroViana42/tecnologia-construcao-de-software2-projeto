import { IsString, IsNumber } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  cliente: string;

  @IsNumber()
  total: number;
}

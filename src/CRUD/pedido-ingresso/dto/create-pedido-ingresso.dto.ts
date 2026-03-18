import { IsInt } from 'class-validator';

export class CreatePedidoIngressoDto {
  @IsInt()
  pedidoId: number;

  @IsInt()
  ingressoId: number;
}

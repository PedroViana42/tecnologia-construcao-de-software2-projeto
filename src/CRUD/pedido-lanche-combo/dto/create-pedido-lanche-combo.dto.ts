import { IsInt } from 'class-validator';

export class CreatePedidoLancheComboDto {
  @IsInt()
  pedidoId: number;

  @IsInt()
  lancheComboId: number;
}

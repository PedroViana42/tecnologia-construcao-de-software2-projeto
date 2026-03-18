import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoLancheComboDto } from './create-pedido-lanche-combo.dto';

export class UpdatePedidoLancheComboDto extends PartialType(CreatePedidoLancheComboDto) {}

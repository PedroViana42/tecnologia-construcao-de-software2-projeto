import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoIngressoDto } from './create-pedido-ingresso.dto';

export class UpdatePedidoIngressoDto extends PartialType(CreatePedidoIngressoDto) {}

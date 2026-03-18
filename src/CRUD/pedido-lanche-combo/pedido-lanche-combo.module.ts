import { Module } from '@nestjs/common';
import { PedidoLancheComboService } from './pedido-lanche-combo.service';
import { PedidoLancheComboController } from './pedido-lanche-combo.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [PedidoLancheComboController],
  providers: [PedidoLancheComboService, PrismaService],
})
export class PedidoLancheComboModule {}

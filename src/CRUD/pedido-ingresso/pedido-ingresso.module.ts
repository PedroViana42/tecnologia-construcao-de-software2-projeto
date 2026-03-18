import { Module } from '@nestjs/common';
import { PedidoIngressoService } from './pedido-ingresso.service';
import { PedidoIngressoController } from './pedido-ingresso.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [PedidoIngressoController],
  providers: [PedidoIngressoService, PrismaService],
})
export class PedidoIngressoModule {}

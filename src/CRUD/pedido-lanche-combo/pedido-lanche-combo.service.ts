import { Injectable } from '@nestjs/common';
import { CreatePedidoLancheComboDto } from './dto/create-pedido-lanche-combo.dto';
import { UpdatePedidoLancheComboDto } from './dto/update-pedido-lanche-combo.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PedidoLancheComboService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoLancheComboDto: CreatePedidoLancheComboDto) {
    return this.prisma.pedidoLancheCombo.create({
      data: createPedidoLancheComboDto,
    });
  }

  findAll() {
    return this.prisma.pedidoLancheCombo.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedidoLancheCombo.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePedidoLancheComboDto: UpdatePedidoLancheComboDto) {
    return this.prisma.pedidoLancheCombo.update({
      where: { id },
      data: updatePedidoLancheComboDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedidoLancheCombo.delete({
      where: { id },
    });
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const { cliente, ingressoIds, lancheComboIds } = createPedidoDto;

    // Fetch items to calculate total
    const ingressos = await this.prisma.ingresso.findMany({
      where: { id: { in: ingressoIds || [] } },
    });

    const lanches = await this.prisma.lancheCombo.findMany({
      where: { id: { in: lancheComboIds || [] } },
    });

    const totalIngressos = ingressos.reduce((sum, item) => sum + item.valorPago, 0);
    const totalLanches = lanches.reduce((sum, item) => sum + item.preco, 0);
    const valorTotal = totalIngressos + totalLanches;

    return this.prisma.pedido.create({
      data: {
        cliente,
        valorTotal,
        ingressos: {
          connect: (ingressoIds || []).map(id => ({ id })),
        },
        lancheCombos: {
          connect: (lancheComboIds || []).map(id => ({ id })),
        },
      },
    });
  }


  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({
      where: { id },
      data: updatePedidoDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({
      where: { id },
    });
  }
}

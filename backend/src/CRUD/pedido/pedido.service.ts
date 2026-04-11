import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const { ingressoIds, lancheComboIds, ...resto } = createPedidoDto;

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
        ...resto,
        valorTotal,
        ingressos: ingressoIds?.length
          ? { connect: ingressoIds.map(id => ({ id })) }
          : undefined,
        lancheCombos: lancheComboIds?.length
          ? { connect: lancheComboIds.map(id => ({ id })) }
          : undefined,
      },
    });
  }


  findAll() {
    return this.prisma.pedido.findMany({
      include: {
        ingressos: {
          include: {
            sessao: {
              include: {
                filme: true,
              },
            },
          },
        },
        lancheCombos: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const { ingressoIds, lancheComboIds, ...resto } = updatePedidoDto;

    // Se houver mudança nos itens, precisamos recalcular o total
    // Para simplificar e garantir precisão, buscamos o estado final desejado
    const ingressos = await this.prisma.ingresso.findMany({
      where: { id: { in: ingressoIds || [] } },
    });

    const lanches = await this.prisma.lancheCombo.findMany({
      where: { id: { in: lancheComboIds || [] } },
    });

    const totalIngressos = ingressos.reduce((sum, item) => sum + item.valorPago, 0);
    const totalLanches = lanches.reduce((sum, item) => sum + item.preco, 0);
    const valorTotal = totalIngressos + totalLanches;

    return this.prisma.pedido.update({
      where: { id },
      data: {
        ...resto,
        valorTotal,
        ingressos: ingressoIds !== undefined
          ? { set: ingressoIds.map(id => ({ id })) }
          : undefined,
        lancheCombos: lancheComboIds !== undefined
          ? { set: lancheComboIds.map(id => ({ id })) }
          : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePedidoIngressoDto } from './dto/create-pedido-ingresso.dto';
import { UpdatePedidoIngressoDto } from './dto/update-pedido-ingresso.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PedidoIngressoService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoIngressoDto: CreatePedidoIngressoDto) {
    return this.prisma.pedidoIngresso.create({
      data: createPedidoIngressoDto,
    });
  }

  findAll() {
    return this.prisma.pedidoIngresso.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedidoIngresso.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePedidoIngressoDto: UpdatePedidoIngressoDto) {
    return this.prisma.pedidoIngresso.update({
      where: { id },
      data: updatePedidoIngressoDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedidoIngresso.delete({
      where: { id },
    });
  }
}

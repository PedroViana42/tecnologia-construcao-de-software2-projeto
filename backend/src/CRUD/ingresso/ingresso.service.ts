import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  async create(createIngressoDto: CreateIngressoDto) {
    const { sessaoId, tipo } = createIngressoDto;

    const sessao = await this.prisma.sessao.findUnique({
      where: { id: sessaoId },
      include: {
        sala: true,
        _count: {
          select: { ingressos: true },
        },
      },
    });

    if (!sessao) {
      throw new BadRequestException('Sessão não encontrada');
    }

    // Check capacity
    if (sessao._count.ingressos >= sessao.sala.capacidade) {
      throw new ConflictException('Capacidade máxima da sala atingida');
    }

    // Calculate valorPago
    const valorPago = tipo === 'Meia' 
      ? sessao.valorIngresso * 0.5 
      : sessao.valorIngresso;

    return this.prisma.ingresso.create({
      data: {
        ...createIngressoDto,
        valorPago,
      },
    });
  }


  findAll() {
    return this.prisma.ingresso.findMany({
      include: {
        sessao: {
          include: {
            filme: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.ingresso.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateIngressoDto: UpdateIngressoDto) {
    const ingressoAtual = await this.prisma.ingresso.findUnique({
      where: { id },
      include: { sessao: true },
    });

    if (!ingressoAtual) {
      throw new BadRequestException('Ingresso não encontrado');
    }

    let valorPago = ingressoAtual.valorPago;

    // Se o tipo mudar, precisamos atualizar o valorPago baseado no valor da sessão
    if (updateIngressoDto.tipo && updateIngressoDto.tipo !== ingressoAtual.tipo) {
      valorPago = updateIngressoDto.tipo === 'Meia'
        ? ingressoAtual.sessao.valorIngresso * 0.5
        : ingressoAtual.sessao.valorIngresso;
    }

    return this.prisma.ingresso.update({
      where: { id },
      data: {
        ...updateIngressoDto,
        valorPago,
      },
    });
  }

  remove(id: number) {
    return this.prisma.ingresso.delete({
      where: { id },
    });
  }
}

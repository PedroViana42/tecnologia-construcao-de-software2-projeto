import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  async create(createSessaoDto: CreateSessaoDto) {
    const { salaId, filmeId, horario } = createSessaoDto;

    // Get movie duration
    const filme = await this.prisma.filme.findUnique({
      where: { id: filmeId },
    });

    if (!filme) {
      throw new ConflictException('Filme não encontrado');
    }

    const durationInMs = (filme.duracao + 15) * 60 * 1000; // 15 min buffer
    const start = new Date(horario);
    const end = new Date(start.getTime() + durationInMs);

    // Check for overlaps in the same room
    const overlaps = await this.prisma.sessao.findMany({
      where: {
        salaId: salaId,
        OR: [
          {
            // Existing session starts during new session
            horario: {
              gte: start,
              lt: end,
            },
          },
          {
            // New session starts during existing session
            // We need the duration of existing sessions too
            // To simplify, we can check if existing sessions end after new session starts
          },
        ],
      },
      include: {
        filme: true,
      },
    });

    // Detailed overlap check since existing sessions have different durations
    for (const existing of overlaps) {
      const existingStart = new Date(existing.horario);
      const existingEnd = new Date(
        existingStart.getTime() + (existing.filme.duracao + 15) * 60 * 1000,
      );

      if (start < existingEnd && existingStart < end) {
        throw new ConflictException(
          `A sala já está ocupada pela sessão das ${existingStart.toLocaleTimeString()} até as ${existingEnd.toLocaleTimeString()}`,
        );
      }
    }

    // Double check with a broader query just in case the OR above missed something
    // (Existing session starts before and ends after new session)
    const existingSessoes = await this.prisma.sessao.findMany({
      where: { salaId },
      include: { filme: true },
    });

    for (const existing of existingSessoes) {
      const existingStart = new Date(existing.horario);
      const existingEnd = new Date(
        existingStart.getTime() + (existing.filme.duracao + 15) * 60 * 1000,
      );

      if (start < existingEnd && existingStart < end) {
        throw new ConflictException(
          `Conflito de horário: Sala ocupada das ${existingStart.toLocaleTimeString()} às ${existingEnd.toLocaleTimeString()}`,
        );
      }
    }

    return this.prisma.sessao.create({
      data: createSessaoDto,
    });
  }


  findAll() {
    return this.prisma.sessao.findMany();
  }

  findOne(id: number) {
    return this.prisma.sessao.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSessaoDto: UpdateSessaoDto) {
    return this.prisma.sessao.update({
      where: { id },
      data: updateSessaoDto,
    });
  }

  remove(id: number) {
    return this.prisma.sessao.delete({
      where: { id },
    });
  }
}

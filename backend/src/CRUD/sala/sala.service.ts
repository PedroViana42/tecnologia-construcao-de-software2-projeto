import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  async create(createSalaDto: CreateSalaDto) {
    console.log('📦 [SALA SERVICE] Payload recebido:', JSON.stringify(createSalaDto));
    try {
      const result = await this.prisma.sala.create({
        data: createSalaDto,
      });
      console.log('✅ [SALA SERVICE] Sala criada com sucesso!');
      return result;
    } catch (error) {
      console.error('🔥 [SALA SERVICE] Erro ao criar sala:', error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // P2003: Foreign key constraint failed
        if (error.code === 'P2003') {
          throw new BadRequestException(
            'Inconsistência de dados: O Cinema (ID: 1) não foi encontrado no banco.',
          );
        }
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.sala.findMany({
      include: {
        cinema: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.sala.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    return this.prisma.sala.update({
      where: { id },
      data: updateSalaDto,
    });
  }

  remove(id: number) {
    return this.prisma.sala.delete({
      where: { id },
    });
  }
}

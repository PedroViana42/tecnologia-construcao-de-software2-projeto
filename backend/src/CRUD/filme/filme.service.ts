import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  async create(createFilmeDto: CreateFilmeDto) {
    try {
      return await this.prisma.filme.create({
        data: createFilmeDto,
      });
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'P2003') {
        throw new BadRequestException(
          'Inconsistência de dados: O Gênero (ID: 1) não foi encontrado no banco.',
        );
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.filme.findMany({
      include: {
        genero: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return this.prisma.filme.update({
      where: { id },
      data: updateFilmeDto,
    });
  }

  remove(id: number) {
    return this.prisma.filme.delete({
      where: { id },
    });
  }
}

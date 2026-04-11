import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async create(createGeneroDto: CreateGeneroDto) {
    try {
      return await this.prisma.genero.create({
        data: createGeneroDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Já existe um gênero com este nome.');
        }
      }
      throw error;
    }
  }


  findAll() {
    return this.prisma.genero.findMany();
  }

  findOne(id: number) {
    return this.prisma.genero.findUnique({
      where: { id },
    });
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return this.prisma.genero.update({
      where: { id },
      data: updateGeneroDto,
    });
  }

  remove(id: number) {
    return this.prisma.genero.delete({
      where: { id },
    });
  }
}

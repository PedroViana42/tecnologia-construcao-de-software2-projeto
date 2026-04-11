import { PrismaService } from '../../prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Prisma } from '@prisma/client';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createGeneroDto: CreateGeneroDto): Promise<{
        id: number;
        nome: string;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: number): Prisma.Prisma__GeneroClient<{
        id: number;
        nome: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: number, updateGeneroDto: UpdateGeneroDto): Prisma.Prisma__GeneroClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: number): Prisma.Prisma__GeneroClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}

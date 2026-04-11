import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SalaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSalaDto: CreateSalaDto): Promise<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
        cinema: {
            id: number;
            nome: string;
            localizacao: string;
        };
    } & {
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    })[]>;
    findOne(id: number): Prisma.Prisma__SalaClient<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: number, updateSalaDto: UpdateSalaDto): Prisma.Prisma__SalaClient<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: number): Prisma.Prisma__SalaClient<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}

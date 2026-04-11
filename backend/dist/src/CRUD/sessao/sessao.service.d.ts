import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class SessaoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSessaoDto: CreateSessaoDto): Promise<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        sala: {
            id: number;
            numero: number;
            capacidade: number;
            cinemaId: number;
        };
        filme: {
            id: number;
            titulo: string;
            generoId: number;
            duracao: number;
            dataLancamento: Date;
            classificacaoEtaria: string;
        };
    } & {
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateSessaoDto: UpdateSessaoDto): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

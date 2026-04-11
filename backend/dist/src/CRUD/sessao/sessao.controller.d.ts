import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
export declare class SessaoController {
    private readonly sessaoService;
    constructor(sessaoService: SessaoService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateSessaoDto: UpdateSessaoDto): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        id: number;
        cinemaId: number;
        horario: Date;
        valorIngresso: number;
        salaId: number;
        filmeId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmeController {
    private readonly filmeService;
    constructor(filmeService: FilmeService);
    create(createFilmeDto: CreateFilmeDto): Promise<{
        id: number;
        titulo: string;
        generoId: number;
        duracao: number;
        dataLancamento: Date;
        classificacaoEtaria: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        genero: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        titulo: string;
        generoId: number;
        duracao: number;
        dataLancamento: Date;
        classificacaoEtaria: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        id: number;
        titulo: string;
        generoId: number;
        duracao: number;
        dataLancamento: Date;
        classificacaoEtaria: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateFilmeDto: UpdateFilmeDto): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        id: number;
        titulo: string;
        generoId: number;
        duracao: number;
        dataLancamento: Date;
        classificacaoEtaria: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        id: number;
        titulo: string;
        generoId: number;
        duracao: number;
        dataLancamento: Date;
        classificacaoEtaria: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

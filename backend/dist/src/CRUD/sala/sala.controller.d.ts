import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
export declare class SalaController {
    private readonly salaService;
    constructor(salaService: SalaService);
    create(createSalaDto: CreateSalaDto): Promise<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SalaClient<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateSalaDto: UpdateSalaDto): import(".prisma/client").Prisma.Prisma__SalaClient<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SalaClient<{
        id: number;
        numero: number;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

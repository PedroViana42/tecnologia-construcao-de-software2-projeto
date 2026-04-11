import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
export declare class IngressoController {
    private readonly ingressoService;
    constructor(ingressoService: IngressoService);
    create(createIngressoDto: CreateIngressoDto): Promise<{
        id: number;
        tipo: string;
        sessaoId: number;
        valorPago: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        sessao: {
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
        };
    } & {
        id: number;
        tipo: string;
        sessaoId: number;
        valorPago: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__IngressoClient<{
        id: number;
        tipo: string;
        sessaoId: number;
        valorPago: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateIngressoDto: UpdateIngressoDto): Promise<{
        id: number;
        tipo: string;
        sessaoId: number;
        valorPago: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__IngressoClient<{
        id: number;
        tipo: string;
        sessaoId: number;
        valorPago: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

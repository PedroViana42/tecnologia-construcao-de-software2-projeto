import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class PedidoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPedidoDto: CreatePedidoDto): Promise<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        ingressos: ({
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
        })[];
        lancheCombos: {
            id: number;
            nome: string;
            descricao: string;
            preco: number;
        }[];
    } & {
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PedidoClient<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PedidoClient<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

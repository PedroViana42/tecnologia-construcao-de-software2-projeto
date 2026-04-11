import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<{
        id: number;
        cliente: string;
        dataPedido: Date;
        valorTotal: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

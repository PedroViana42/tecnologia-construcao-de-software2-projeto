import { LancheComboService } from './lanche-combo.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
export declare class LancheComboController {
    private readonly lancheComboService;
    constructor(lancheComboService: LancheComboService);
    create(createLancheComboDto: CreateLancheComboDto): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateLancheComboDto: UpdateLancheComboDto): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

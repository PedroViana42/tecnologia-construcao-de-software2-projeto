import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class LancheComboService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateLancheComboDto: UpdateLancheComboDto): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__LancheComboClient<{
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

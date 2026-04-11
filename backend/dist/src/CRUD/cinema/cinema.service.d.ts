import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class CinemaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCinemaDto: CreateCinemaDto): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        localizacao: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateCinemaDto: UpdateCinemaDto): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

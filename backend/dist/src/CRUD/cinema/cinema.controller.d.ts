import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
export declare class CinemaController {
    private readonly cinemaService;
    constructor(cinemaService: CinemaService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateCinemaDto: UpdateCinemaDto): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CinemaClient<{
        id: number;
        nome: string;
        localizacao: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}

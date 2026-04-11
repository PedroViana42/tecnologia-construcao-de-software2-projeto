"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SessaoService = class SessaoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSessaoDto) {
        const { salaId, filmeId, horario } = createSessaoDto;
        const filme = await this.prisma.filme.findUnique({
            where: { id: filmeId },
        });
        if (!filme) {
            throw new common_1.ConflictException('Filme não encontrado');
        }
        const durationInMs = (filme.duracao + 15) * 60 * 1000;
        const start = new Date(horario);
        const end = new Date(start.getTime() + durationInMs);
        const overlaps = await this.prisma.sessao.findMany({
            where: {
                salaId: salaId,
                OR: [
                    {
                        horario: {
                            gte: start,
                            lt: end,
                        },
                    },
                    {},
                ],
            },
            include: {
                filme: true,
            },
        });
        for (const existing of overlaps) {
            const existingStart = new Date(existing.horario);
            const existingEnd = new Date(existingStart.getTime() + (existing.filme.duracao + 15) * 60 * 1000);
            if (start < existingEnd && existingStart < end) {
                throw new common_1.ConflictException(`A sala já está ocupada pela sessão das ${existingStart.toLocaleTimeString()} até as ${existingEnd.toLocaleTimeString()}`);
            }
        }
        const existingSessoes = await this.prisma.sessao.findMany({
            where: { salaId },
            include: { filme: true },
        });
        for (const existing of existingSessoes) {
            const existingStart = new Date(existing.horario);
            const existingEnd = new Date(existingStart.getTime() + (existing.filme.duracao + 15) * 60 * 1000);
            if (start < existingEnd && existingStart < end) {
                throw new common_1.ConflictException(`Conflito de horário: Sala ocupada das ${existingStart.toLocaleTimeString()} às ${existingEnd.toLocaleTimeString()}`);
            }
        }
        try {
            return await this.prisma.sessao.create({
                data: createSessaoDto,
            });
        }
        catch (error) {
            if (error && typeof error === 'object' && 'code' in error && error.code === 'P2003') {
                throw new common_1.BadRequestException('Inconsistência de dados: Verifique se o Filme, Sala e Cinema existem no banco.');
            }
            throw error;
        }
    }
    findAll() {
        return this.prisma.sessao.findMany({
            include: {
                filme: true,
                sala: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.sessao.findUnique({
            where: { id },
        });
    }
    update(id, updateSessaoDto) {
        return this.prisma.sessao.update({
            where: { id },
            data: updateSessaoDto,
        });
    }
    remove(id) {
        return this.prisma.sessao.delete({
            where: { id },
        });
    }
};
exports.SessaoService = SessaoService;
exports.SessaoService = SessaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SessaoService);
//# sourceMappingURL=sessao.service.js.map
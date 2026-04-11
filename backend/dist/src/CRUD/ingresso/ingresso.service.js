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
exports.IngressoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let IngressoService = class IngressoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createIngressoDto) {
        const { sessaoId, tipo } = createIngressoDto;
        const sessao = await this.prisma.sessao.findUnique({
            where: { id: sessaoId },
            include: {
                sala: true,
                _count: {
                    select: { ingressos: true },
                },
            },
        });
        if (!sessao) {
            throw new common_1.BadRequestException('Sessão não encontrada');
        }
        if (sessao._count.ingressos >= sessao.sala.capacidade) {
            throw new common_1.ConflictException('Capacidade máxima da sala atingida');
        }
        const valorPago = tipo === 'Meia'
            ? sessao.valorIngresso * 0.5
            : sessao.valorIngresso;
        return this.prisma.ingresso.create({
            data: {
                ...createIngressoDto,
                valorPago,
            },
        });
    }
    findAll() {
        return this.prisma.ingresso.findMany({
            include: {
                sessao: {
                    include: {
                        filme: true,
                    },
                },
            },
        });
    }
    findOne(id) {
        return this.prisma.ingresso.findUnique({
            where: { id },
        });
    }
    async update(id, updateIngressoDto) {
        const ingressoAtual = await this.prisma.ingresso.findUnique({
            where: { id },
            include: { sessao: true },
        });
        if (!ingressoAtual) {
            throw new common_1.BadRequestException('Ingresso não encontrado');
        }
        let valorPago = ingressoAtual.valorPago;
        if (updateIngressoDto.tipo && updateIngressoDto.tipo !== ingressoAtual.tipo) {
            valorPago = updateIngressoDto.tipo === 'Meia'
                ? ingressoAtual.sessao.valorIngresso * 0.5
                : ingressoAtual.sessao.valorIngresso;
        }
        return this.prisma.ingresso.update({
            where: { id },
            data: {
                ...updateIngressoDto,
                valorPago,
            },
        });
    }
    remove(id) {
        return this.prisma.ingresso.delete({
            where: { id },
        });
    }
};
exports.IngressoService = IngressoService;
exports.IngressoService = IngressoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IngressoService);
//# sourceMappingURL=ingresso.service.js.map
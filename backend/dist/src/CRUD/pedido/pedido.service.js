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
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PedidoService = class PedidoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPedidoDto) {
        const { ingressoIds, lancheComboIds, ...resto } = createPedidoDto;
        const ingressos = await this.prisma.ingresso.findMany({
            where: { id: { in: ingressoIds || [] } },
        });
        const lanches = await this.prisma.lancheCombo.findMany({
            where: { id: { in: lancheComboIds || [] } },
        });
        const totalIngressos = ingressos.reduce((sum, item) => sum + item.valorPago, 0);
        const totalLanches = lanches.reduce((sum, item) => sum + item.preco, 0);
        const valorTotal = totalIngressos + totalLanches;
        return this.prisma.pedido.create({
            data: {
                ...resto,
                valorTotal,
                ingressos: ingressoIds?.length
                    ? { connect: ingressoIds.map(id => ({ id })) }
                    : undefined,
                lancheCombos: lancheComboIds?.length
                    ? { connect: lancheComboIds.map(id => ({ id })) }
                    : undefined,
            },
        });
    }
    findAll() {
        return this.prisma.pedido.findMany({
            include: {
                ingressos: {
                    include: {
                        sessao: {
                            include: {
                                filme: true,
                            },
                        },
                    },
                },
                lancheCombos: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.pedido.findUnique({
            where: { id },
        });
    }
    async update(id, updatePedidoDto) {
        const { ingressoIds, lancheComboIds, ...resto } = updatePedidoDto;
        const ingressos = await this.prisma.ingresso.findMany({
            where: { id: { in: ingressoIds || [] } },
        });
        const lanches = await this.prisma.lancheCombo.findMany({
            where: { id: { in: lancheComboIds || [] } },
        });
        const totalIngressos = ingressos.reduce((sum, item) => sum + item.valorPago, 0);
        const totalLanches = lanches.reduce((sum, item) => sum + item.preco, 0);
        const valorTotal = totalIngressos + totalLanches;
        return this.prisma.pedido.update({
            where: { id },
            data: {
                ...resto,
                valorTotal,
                ingressos: ingressoIds !== undefined
                    ? { set: ingressoIds.map(id => ({ id })) }
                    : undefined,
                lancheCombos: lancheComboIds !== undefined
                    ? { set: lancheComboIds.map(id => ({ id })) }
                    : undefined,
            },
        });
    }
    remove(id) {
        return this.prisma.pedido.delete({
            where: { id },
        });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map
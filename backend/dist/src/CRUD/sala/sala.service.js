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
exports.SalaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let SalaService = class SalaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSalaDto) {
        console.log('📦 [SALA SERVICE] Payload recebido:', JSON.stringify(createSalaDto));
        try {
            const result = await this.prisma.sala.create({
                data: createSalaDto,
            });
            console.log('✅ [SALA SERVICE] Sala criada com sucesso!');
            return result;
        }
        catch (error) {
            console.error('🔥 [SALA SERVICE] Erro ao criar sala:', error);
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2003') {
                    throw new common_1.BadRequestException('Inconsistência de dados: O Cinema (ID: 1) não foi encontrado no banco.');
                }
            }
            throw error;
        }
    }
    findAll() {
        return this.prisma.sala.findMany({
            include: {
                cinema: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.sala.findUnique({
            where: { id },
        });
    }
    update(id, updateSalaDto) {
        return this.prisma.sala.update({
            where: { id },
            data: updateSalaDto,
        });
    }
    remove(id) {
        return this.prisma.sala.delete({
            where: { id },
        });
    }
};
exports.SalaService = SalaService;
exports.SalaService = SalaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalaService);
//# sourceMappingURL=sala.service.js.map
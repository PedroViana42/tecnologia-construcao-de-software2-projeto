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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngressoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const ingresso_service_1 = require("./ingresso.service");
const create_ingresso_dto_1 = require("./dto/create-ingresso.dto");
const update_ingresso_dto_1 = require("./dto/update-ingresso.dto");
let IngressoController = class IngressoController {
    ingressoService;
    constructor(ingressoService) {
        this.ingressoService = ingressoService;
    }
    create(createIngressoDto) {
        return this.ingressoService.create(createIngressoDto);
    }
    findAll() {
        return this.ingressoService.findAll();
    }
    findOne(id) {
        return this.ingressoService.findOne(+id);
    }
    update(id, updateIngressoDto) {
        return this.ingressoService.update(+id, updateIngressoDto);
    }
    remove(id) {
        return this.ingressoService.remove(+id);
    }
};
exports.IngressoController = IngressoController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ingresso_dto_1.CreateIngressoDto]),
    __metadata("design:returntype", void 0)
], IngressoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngressoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngressoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ingresso_dto_1.UpdateIngressoDto]),
    __metadata("design:returntype", void 0)
], IngressoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngressoController.prototype, "remove", null);
exports.IngressoController = IngressoController = __decorate([
    (0, common_1.Controller)('ingresso'),
    __metadata("design:paramtypes", [ingresso_service_1.IngressoService])
], IngressoController);
//# sourceMappingURL=ingresso.controller.js.map
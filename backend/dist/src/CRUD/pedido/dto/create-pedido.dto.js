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
exports.CreatePedidoDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePedidoDto {
    cliente;
    ingressoIds;
    lancheComboIds;
    static _OPENAPI_METADATA_FACTORY() {
        return { cliente: { required: true, type: () => String }, ingressoIds: { required: false, type: () => [Number] }, lancheComboIds: { required: false, type: () => [Number] } };
    }
}
exports.CreatePedidoDto = CreatePedidoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'João Silva' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "cliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2], type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePedidoDto.prototype, "ingressoIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1], type: [Number] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePedidoDto.prototype, "lancheComboIds", void 0);
//# sourceMappingURL=create-pedido.dto.js.map
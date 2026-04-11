"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLancheComboDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lanche_combo_dto_1 = require("./create-lanche-combo.dto");
class UpdateLancheComboDto extends (0, mapped_types_1.PartialType)(create_lanche_combo_dto_1.CreateLancheComboDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateLancheComboDto = UpdateLancheComboDto;
//# sourceMappingURL=update-lanche-combo.dto.js.map
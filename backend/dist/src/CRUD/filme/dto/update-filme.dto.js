"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilmeDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_filme_dto_1 = require("./create-filme.dto");
class UpdateFilmeDto extends (0, mapped_types_1.PartialType)(create_filme_dto_1.CreateFilmeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFilmeDto = UpdateFilmeDto;
//# sourceMappingURL=update-filme.dto.js.map
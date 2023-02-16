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
exports.AnimalesDTO = void 0;
const class_validator_1 = require("class-validator");
const decorators_1 = require("class-validator/types/decorator/decorators");
class AnimalesDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], AnimalesDTO.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], AnimalesDTO.prototype, "raza", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], AnimalesDTO.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], AnimalesDTO.prototype, "tama\u00F1o", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, decorators_1.IsString)(),
    __metadata("design:type", String)
], AnimalesDTO.prototype, "Nombre_due\u00F1o", void 0);
exports.AnimalesDTO = AnimalesDTO;
//# sourceMappingURL=animales.dto.js.map
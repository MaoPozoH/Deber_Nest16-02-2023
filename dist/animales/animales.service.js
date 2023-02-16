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
exports.AnimalesService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../common/models/models");
const mongoose_2 = require("mongoose");
let AnimalesService = class AnimalesService {
    constructor(modelo) {
        this.modelo = modelo;
    }
    async hashPassword(Nombre_cliente) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(Nombre_cliente, salt);
    }
    async insertar(animalesDTO) {
        const hash = await this.hashPassword(animalesDTO.Nombre_dueño);
        const newanimal = new this.modelo(Object.assign(Object.assign({}, animalesDTO), { Nombre_cliente: hash }));
        return newanimal.save();
    }
};
AnimalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(models_1.ANIMAL.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AnimalesService);
exports.AnimalesService = AnimalesService;
//# sourceMappingURL=animales.service.js.map
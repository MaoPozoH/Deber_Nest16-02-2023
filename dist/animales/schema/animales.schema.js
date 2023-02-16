"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AnimalSchema = new mongoose_1.default.Schema({
    nombre: { type: String, require: true },
    raza: { type: String, require: true },
    color: { type: String, require: true },
    tamaño: { type: String, require: true },
    Nombre_dueño: { type: String, require: true },
}, {
    timestamps: true
});
exports.AnimalSchema.index({ nombre: 1 }, { unique: true });
exports.AnimalSchema.index({ Nombre_dueño: 1 }, { unique: true });
//# sourceMappingURL=animales.schema.js.map
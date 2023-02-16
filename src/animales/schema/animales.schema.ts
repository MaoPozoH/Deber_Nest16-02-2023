import mongoose from "mongoose";

export const AnimalSchema = new mongoose.Schema({
    nombre:{ type: String, require: true},
    raza: { type: String, require: true},
    color: { type: String, require: true},
    tamaño: { type: String, require: true},
    Nombre_dueño: { type: String, require: true},
},
{
    timestamps:true
}
);

AnimalSchema.index({nombre:1},{unique:true});
AnimalSchema.index({Nombre_dueño:1},{unique:true});
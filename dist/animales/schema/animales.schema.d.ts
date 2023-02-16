import mongoose from "mongoose";
export declare const AnimalSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nombre?: string;
    raza?: string;
    color?: string;
    tamaño?: string;
    Nombre_dueño?: string;
}>;

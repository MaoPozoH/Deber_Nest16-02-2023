import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator/types/decorator/decorators";

export class AnimalesDTO{
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    @IsNotEmpty()
    @IsString()
    readonly raza: string;
    @IsNotEmpty()
    @IsString()
    readonly color: string;
    @IsNotEmpty()
    @IsString()
    readonly tamaño: string;
    @IsNotEmpty()
    @IsString()
    readonly Nombre_dueño: string;
}
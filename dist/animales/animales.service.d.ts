import { IAnimales } from 'src/common/Interfaces/animales.interface';
import { AnimalesDTO } from './dto/animales.dto';
import { Model } from 'mongoose';
export declare class AnimalesService {
    private readonly modelo;
    constructor(modelo: Model<IAnimales>);
    hashPassword(Nombre_cliente: string): Promise<string>;
    insertar(animalesDTO: AnimalesDTO): Promise<IAnimales>;
}

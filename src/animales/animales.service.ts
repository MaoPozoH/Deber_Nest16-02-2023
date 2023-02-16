import { Injectable } from '@nestjs/common';
import { IAnimales } from 'src/common/Interfaces/animales.interface';
import { AnimalesDTO } from './dto/animales.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { ANIMAL } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class AnimalesService {
    constructor(@InjectModel(ANIMAL.name) private readonly modelo:Model<IAnimales>){}

    async hashPassword(Nombre_cliente: string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(Nombre_cliente, salt);
    }

    async insertar(animalesDTO:AnimalesDTO):Promise<IAnimales>{
        const hash = await this.hashPassword(animalesDTO.Nombre_dueño);
        const newanimal = new this.modelo({...animalesDTO, Nombre_cliente:hash});
        return newanimal.save();

    }
}

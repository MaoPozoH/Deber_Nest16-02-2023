import { AnimalesService } from './animales.service';
import { AnimalesDTO } from './dto/animales.dto';
export declare class AnimalesController {
    private readonly animalesServicio;
    constructor(animalesServicio: AnimalesService);
    insertar(animalesDTO: AnimalesDTO): Promise<import("../common/Interfaces/animales.interface").IAnimales>;
}

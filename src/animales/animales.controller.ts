import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesDTO } from './dto/animales.dto';

@Controller('api/v1/animales')
export class AnimalesController {
    constructor (private readonly animalesServicio:AnimalesService){}

    @Post()
    insertar(@Body() animalesDTO:AnimalesDTO){
        return this.animalesServicio.insertar(animalesDTO);
    }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalesController } from './animales.controller';
import { AnimalesService } from './animales.service';
import { AnimalSchema } from './schema/animales.schema';
import { ANIMAL } from '../common/models/models';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name:ANIMAL.name,
        useFactory:()=>{
          return AnimalSchema;
        }
      }
    ])
  ],
  controllers: [AnimalesController],
  providers: [AnimalesService]
})
export class AnimalesModule {}

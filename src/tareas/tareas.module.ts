import { Module } from '@nestjs/common';
import { tareasController } from './tareas.controller'
import { TareasService } from './tareas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Tarea} from './tareas.entity';


@Module({ 
    imports:[TypeOrmModule.forFeature([Tarea])],
    controllers:[tareasController],
    providers: [TareasService]})
export class TareasModule {}

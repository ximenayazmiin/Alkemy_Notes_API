import { Module } from '@nestjs/common';
import { tareasController } from './tareas.controller'

@Module({ controllers:[tareasController]})
export class TareasModule {}

import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { Tarea } from './tareas.entity';

@Controller({ })
export class tareasController{

    constructor(private TareasService:TareasService){}
    @Get('tareas')
    getTareas():Promise<Tarea[]>{
        let tareas = this.TareasService.findAll()
    return tareas
    }
    @Get('tarea/:id_tarea')
    async findOne(@Param('id_tarea') id_tarea: number): Promise<Tarea | null> {
        let respuesta = await this.TareasService.findOne(id_tarea);
        if(!respuesta){
            return null
        }
        return respuesta
    }
    @Post('tarea')
    async createTarea(@Body() body:Tarea):Promise<Tarea>{
        return this.TareasService.createTarea(body)
    }

    @Put('tarea/:id_tarea')
    async updateTarea(@Param('id_tarea') id_tarea: number, @Body() body: Tarea): Promise<Tarea | null> {
        let respuesta = await this.TareasService.updateTarea(id_tarea, body);
        if(!respuesta){
            return null
        }
        return respuesta
    }
    @Delete('tarea/:id_tarea')
    async deleteTarea(@Param('id_tarea') id_tarea: number): Promise<Tarea | null> {
        let respuesta = await this.TareasService.deleteTarea(id_tarea);
        if(!respuesta){
            return null
        }
        return respuesta
    }



}
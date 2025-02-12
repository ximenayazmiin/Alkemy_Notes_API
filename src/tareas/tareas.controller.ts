import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller({ })
export class tareasController{

@Get('tareas')
getTareas(){
    const tareas_array = [
        {
            id:1,
            descripcion:'Tarea1',
            estatus:1
        },
        {
            id:2,
            descripcion:'Tarea2',
            estatus:0
        }
    ]
    return tareas_array
}


}
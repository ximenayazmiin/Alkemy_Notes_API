import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './tareas.entity';

/**
 * Servicio que se encarga de gestionar las tareas.
 * @Author:Ximena Yazmin Ibarra Hernandez 
 * @Version: 1.0
 * @Fecha: 2021-07-15
 * GitHub:ximenayazmiin
 * 
 */


@Injectable()
export class TareasService {
   
    constructor(
        @InjectRepository(Tarea)
        private tareasRepositorio:Repository<Tarea>
    ){}

    /**
     * 
     * @returns  retorna todas las tareas
     */
    findAll():Promise<Tarea[]>{
        return this.tareasRepositorio.find();
    }

    /**
     * 
     * @param id_tarea 
     * @returns  retorna una tarea por su id
     */
    async findOne(id_tarea:number):Promise<Tarea | null>{
        const tarea = await this.tareasRepositorio.findOne({
            where:{id_tarea}
        });
        if (!tarea) {
            return null;
        }
        return tarea;
    }

    // createTarea(body:Tarea): Promise<Tarea> {
    //     const tarea = new Tarea();
    //     tarea.descripcion = body.descripcion;
    //     tarea.estatus = body.estatus
    //     return this.tareasRepositorio.save(tarea);
    // }
    /**
     * 
     * @param body 
     * @returns  crea una tarea
     */
    async createTarea(body:Tarea): Promise<Tarea> {
       return this.tareasRepositorio.save(body);
    }

    /**
     * 
     * @param id_tarea 
     * @param body 
     * @returns  actualiza una tarea
     */
    
    async updateTarea(id_tarea:number, body:Tarea): Promise<Tarea | null> {
        const tarea = await this.tareasRepositorio.findOne({
            where:{id_tarea}
        });
        if (!tarea) {
            return null;
        }
        this.tareasRepositorio.merge(tarea, body);
        return this.tareasRepositorio.save(tarea);
    }

    /**
     * 
     * @param id_tarea 
     * @returns  elimina una tarea
     */
    async deleteTarea(id_tarea:number): Promise<Tarea | null> {
        const tarea = await this.tareasRepositorio.findOne({
            where:{id_tarea}
        });
        if (!tarea) {
            return null;
        }
        return this.tareasRepositorio.remove(tarea);
    }
}

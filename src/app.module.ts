import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Tarea} from './tareas/tareas.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Cambia esto por tu usuario de MySQL
      password: '', // Cambia esto por tu contraseña de MySQL
      database: 'bd_examen', // Cambia esto por el nombre de tu base de datos
      entities: [Tarea],
      synchronize: true, // ¡Cuidado! Esto solo debe usarse en desarrollo.
    }),
   TareasModule
  ],
})
export class AppModule {}

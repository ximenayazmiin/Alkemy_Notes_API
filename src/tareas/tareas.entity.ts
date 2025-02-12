import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tareas')
export class Tarea {
  @PrimaryGeneratedColumn()
  id_tarea: number;

  @Column({ type: 'longtext'})
  descripcion: string;

  @Column({ type: 'boolean', default: false })
  estatus: boolean;
}

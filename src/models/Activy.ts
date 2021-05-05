import {Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';


@Entity('activies')
class Activy{
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    activy_date: Date;

    @Column()
    course_unit_id: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit;

}
export {Activy}
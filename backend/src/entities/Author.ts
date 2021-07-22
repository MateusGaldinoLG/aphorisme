import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity("authors")
class Author{
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;
    
    @Column({ nullable: true })
    bio: string;

    @Column()
    born_at: Date;

    @Column({ nullable: true })
    died_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Author }

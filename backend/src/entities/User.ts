import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';


@Entity("users")
class User{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    name: string

    @Column()
    age: number;

    @Column()
    dob: Date;

    @Column()
    pronoun: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { User };
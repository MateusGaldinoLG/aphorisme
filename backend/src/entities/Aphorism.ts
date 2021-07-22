import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';
import { Author } from "./Author";
import { User } from "./User";

@Entity("aphorisms")
class Aphorism{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    text: string;

    @Column()
    like: number;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    userId: User;

    @Column({ nullable: true })
    author_id: string;

    @JoinColumn({name: "author_id"})
    @ManyToOne(() => Author)
    authorId: Author;

    @Column({ nullable: true })
    author_name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Aphorism }
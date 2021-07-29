import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";


@Entity('user_followers')
class UserFollower{

    @PrimaryColumn()
    id: number;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @OneToOne(() => User)
    userId: User;  

    @Column()
    follower_id: string;

    @JoinColumn({name: "follower_id"})
    @OneToOne(() => User)
    followerId: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = (Math.random() * 100000000)
        }
    }

}

export {UserFollower}
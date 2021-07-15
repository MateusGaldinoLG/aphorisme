import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";


class GetUserByUserNameService{

    async execute(username: string){
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            username
        });

        if(!user){
            throw new Error(`User with name ${username} not found`)
        }

        //console.log(user);

        return classToPlain(user);
    }

}

export {GetUserByUserNameService}
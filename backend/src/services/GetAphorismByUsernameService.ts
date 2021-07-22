import { getCustomRepository } from "typeorm";
import { AphorismRepository } from "../repositories/AphorismRepository"
import { UserRepository } from "../repositories/UserRepository";


class GetAphorismByUsernameService{

    async execute(username: string){

        const aphorismRepository = getCustomRepository(AphorismRepository);
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            username
        })

        if(!user){
            throw new Error(`User with username ${username} not found`)
        }

        const user_id = user.id;

        const aphorisms = aphorismRepository.find({
            user_id
        })

        return aphorisms;

    }

}

export { GetAphorismByUsernameService }
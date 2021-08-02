import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { AphorismRepository } from "../repositories/AphorismRepository";
import { UserRepository } from "../repositories/UserRepository"


class GetAphorismAndUsersService{

    async execute(aphorism_id: string){
        const usersRepository = getCustomRepository(UserRepository);
        const aphorismRepository = getCustomRepository(AphorismRepository);

        const aphorism = await aphorismRepository.findOne({
            id: aphorism_id
        })

        if(!aphorism){
            throw new Error('Aphorism with id '+aphorism_id+' does not exist')
        }

        const user = await usersRepository.findOne({
            id: aphorism.user_id
        })

        const response = {
            user: classToPlain(user),
            aphorism: aphorism
        }

        return response
    }
}

export {GetAphorismAndUsersService}
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";


class GetUserDetailService{
    async execute(id: string){
        const usersRepository = getCustomRepository(UserRepository);

        const user = await usersRepository.findOne({
            id
        });

        return classToPlain(user);
    }
}

export {GetUserDetailService}
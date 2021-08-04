import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"


interface IUserUpdate{
    id: string;
    name: string;
    description: string;
    pronoun: string;
}

class UpdateUserDetailsService{

    async execute({id, name, description, pronoun}: IUserUpdate){
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            id
        })

        if(!user){
            throw new Error("User does not exist")
        }

        user.name = name;
        user.description = description;
        user.pronoun = pronoun;

        const results = await userRepository.save(user!);

        return classToPlain(results);
    }

}

export {UpdateUserDetailsService}
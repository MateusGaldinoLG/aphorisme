import { getCustomRepository } from "typeorm"
import { AphorismRepository } from "../repositories/AphorismRepository"
import { UserRepository } from "../repositories/UserRepository";


interface ICreateAphorism{
    text: string;
    like: number;
    user_id: string;
    author_id?: string;
    author_name?: string;
}

class CreateAphorismService{

    async execute({text, like, user_id, author_id, author_name}: ICreateAphorism){
        const aphorismRepository = getCustomRepository(AphorismRepository);
        const usersRepository = getCustomRepository(UserRepository);

        if(!text){
            throw new Error("Aphorism text must not be empty")
        }

        if(!user_id){
            throw new Error("User id must be defined")
        }

        const userExists = await usersRepository.findOne({
            id: user_id
        })

        if(!userExists){
            throw new Error("User does not exist")
        }

        if(!author_name){
            author_name = userExists.name;
        }

        const aphorism = aphorismRepository.create({
            text,
            like,
            user_id,
            author_id,
            author_name,
        })

        await aphorismRepository.save(aphorism);

        return aphorism;
        
    }
}

export { CreateAphorismService }
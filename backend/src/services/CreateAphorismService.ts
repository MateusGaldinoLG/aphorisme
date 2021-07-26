import { getCustomRepository } from "typeorm"
import { AphorismRepository } from "../repositories/AphorismRepository"
import { AuthorRepository } from "../repositories/AuthorRepository";
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
        const authorRepository = getCustomRepository(AuthorRepository);

        let hasAuthorName = true;
        let author;

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
            hasAuthorName = false;
            author_name = userExists.name;
        }

        if(hasAuthorName){
            console.log(author_name)
            author = await authorRepository.findOne({
                name: author_name
            })
            if(author){
                author_id = author!.id;
                console.log(author_id)
            }
            console.log(author)
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
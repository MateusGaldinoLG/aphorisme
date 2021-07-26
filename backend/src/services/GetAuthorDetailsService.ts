import { getCustomRepository } from "typeorm"
import { AuthorRepository } from "../repositories/AuthorRepository"


class GetAuthorDetailsService{

    async execute(name: string){
        const authorRepository = getCustomRepository(AuthorRepository);

        const author = await authorRepository.findOne({
            name
        })

        if(!author){
            throw new Error(`author with name ${name} not found`)
        }

        return author;


    }

}

export { GetAuthorDetailsService }
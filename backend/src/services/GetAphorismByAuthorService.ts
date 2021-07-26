import { getCustomRepository } from "typeorm"
import { AphorismRepository } from "../repositories/AphorismRepository";
import { AuthorRepository } from "../repositories/AuthorRepository"


class GetAphorismByAuthorService{

    async execute(author_name: string){
        const authorRepository = getCustomRepository(AuthorRepository);
        const aphorismRepository = getCustomRepository(AphorismRepository);

        const author = await authorRepository.findOne({
            name: author_name
        })

        if(!author){
            throw new Error(`Author with name ${author_name} not found`)
        }

        const author_id = author.id;

        const authorAphorism = await aphorismRepository.find({
            author_id
        })

        return authorAphorism;
    }
}

export { GetAphorismByAuthorService }
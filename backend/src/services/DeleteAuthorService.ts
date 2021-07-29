import { getCustomRepository } from "typeorm"
import { AuthorRepository } from "../repositories/AuthorRepository"


class DeleteAuthorService{

    async execute(id: string){
        const authorRepository = getCustomRepository(AuthorRepository);

        const result = await authorRepository.delete({
            id
        })

        return result;
    }
}

export {DeleteAuthorService}
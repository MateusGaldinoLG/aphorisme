import { getCustomRepository } from "typeorm"
import { AuthorRepository } from "../repositories/AuthorRepository"


export class GetAllAuthorsService{

    async execute(){
        const authorRepository = getCustomRepository(AuthorRepository);

        const allAuthors = await authorRepository.find();

        return allAuthors;

    }

}
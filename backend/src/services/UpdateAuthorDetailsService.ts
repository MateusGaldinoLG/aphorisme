import { getCustomRepository } from "typeorm"
import { AuthorRepository } from "../repositories/AuthorRepository"


interface IUpdateAuthor{
    name: string;
    bio: string;
    born_at: Date;
    died_at?: Date;
}


class UpdateAuthorDetailsService{

    async execute({name, bio, born_at, died_at}: IUpdateAuthor){
        const authorRepository = getCustomRepository(AuthorRepository);

        const author = await authorRepository.findOne({
            name
        })

        if(!author){
            throw new Error('Author does not exist')
        }

        author.bio = bio;
        author.born_at = born_at;
        author.died_at = died_at!;

        console.log(author);

        const results = await authorRepository.save(author);

        return results;


    }
}

export {UpdateAuthorDetailsService}
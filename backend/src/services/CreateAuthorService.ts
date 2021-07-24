import { getCustomRepository } from "typeorm"
import { AuthorRepository } from "../repositories/AuthorRepository"

interface ICreateAuthor{
    name: string;
    bio?: string;
    born_at: Date;
    died_at?: Date;
}

class CreateAuthorService {

    async execute({name, bio, born_at, died_at}: ICreateAuthor){
        const authorRepository = getCustomRepository(AuthorRepository);

        let defaultBio: string;

        const authorAlreadyExists = await authorRepository.findOne({
            name
        })

        if(authorAlreadyExists){
            throw new Error("Author already exists")
        }

        if(!name){
            throw new Error("Name must be defined")
        }

        if(!born_at){
            throw new Error("Author must have a birth day")
        }

        if(!bio){
            let dob = born_at.toString().split(" ").slice(1, 4);
            //console.log(dob);
            defaultBio = `author ${name} was born in ${dob}`
        } else {
            defaultBio = bio
        }
        
        const author = authorRepository.create({
            name,
            bio: defaultBio,
            born_at,
            died_at
        })

        await authorRepository.save(author);

        return author;

    }

}

export { CreateAuthorService }
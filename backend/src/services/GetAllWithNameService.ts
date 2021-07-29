import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { AuthorRepository } from "../repositories/AuthorRepository";
import { UserRepository } from "../repositories/UserRepository"


class GetAllWithNameService{

    async execute(name: string){
        const userRepository = getCustomRepository(UserRepository);
        const authorRepository = getCustomRepository(AuthorRepository);

        const allAuthorsWithName = await authorRepository.find({
            name
        })

        const allUsersWithUserName = await userRepository.find({
            username: name
        })

        const allUsersWithName = await userRepository.find({
            name
        })

        const allEntries = {
            authors: allAuthorsWithName,
            users: [
                classToPlain(allUsersWithUserName),
                classToPlain(allUsersWithName)
            ]
        }

        return allEntries
    }

}

export { GetAllWithNameService }
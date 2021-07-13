import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

interface IDescription{
    id: string;
    description: string;
}

export class AddUserDescriptionByIdService{

    async execute({id, description}: IDescription){
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            id
        })

        //console.log(user)

        if(!user){
            throw new Error("User does not exist")
        }

        user.description = description;

        //console.log(user)

        const results = await userRepository.save(user!);
        //console.log(results)

        return classToPlain(results);
    }
}
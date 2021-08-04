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

        if(!user){
            throw new Error("User does not exist")
        }

        user.description = description;

        const results = await userRepository.save(user!);

        return classToPlain(results);
    }
}
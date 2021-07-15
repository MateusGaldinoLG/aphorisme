import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest{
    username: string;
    name?: string;
    email: string;
    password: string;
    age: number;
    dateOfBirth: Date;
    //pronoun?: string;
    //description: string;
}

class CreateUserService{

    async execute({username, name = username, email, password, age, dateOfBirth}: IUserRequest){

        const usersRepository = getCustomRepository(UserRepository);

        if(!username){
            throw new Error("Username must be defined")
        }

        if(!email){
            throw new Error("Email must be defined")
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        const userNameAlreadyTaken = await usersRepository.findOne({
            username
        })

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        if(userNameAlreadyTaken){
            throw new Error("UserName already taken")
        }

        if(age < 15){
            throw new Error("User age too low")
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            username,
            email,
            password: passwordHash,
            name,
            age,
            dob: dateOfBirth
        })

        await usersRepository.save(user);

        return user;

    }

}

export {CreateUserService};
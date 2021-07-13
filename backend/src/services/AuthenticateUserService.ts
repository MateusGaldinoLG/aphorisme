import { compare } from 'bcryptjs';
import dotenv from 'dotenv';
import { getCustomRepository } from 'typeorm';
import {sign} from 'jsonwebtoken';
import { UserRepository } from '../repositories/UserRepository';


dotenv.config();
const JWTKey = process.env.TOKEN_KEY;

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        //verifica se email existe

        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findOne({
            email
        })

        if(!user){
            throw new Error("Incorrect Email/Password")
        }

        //verifica se senha está correta

        const passwordMatch: boolean = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Incorrect Email/Password")
        }

        //gerar o token

        const token: string = sign({
            email: user.email
        }, JWTKey!, {
            subject: user.id,
            expiresIn: "1d"
        })

        return token;
    }
}

export {AuthenticateUserService}
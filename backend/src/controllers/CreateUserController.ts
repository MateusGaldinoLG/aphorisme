import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController{

    async handle(req: Request, res: Response){
        const {username, email, password, age, dateOfBirth} = req.body;

        const dob = new Date(dateOfBirth);

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({username, email, password, age, dateOfBirth: dob})

        return res.json(user);
    }
}

export {CreateUserController};
import { Request, Response } from "express";
import { CreateAuthorService } from "../services/CreateAuthorService";


class CreateAuthorController {

    async handle(req: Request, res: Response){
        const {name, bio, born_at, died_at} = req.body;
        
        const dateOfBirth = new Date(born_at);
        let dateOfDeath: Date | undefined
        if(died_at){
            dateOfDeath = new Date(died_at);
        }
        
        const createAuthorService = new CreateAuthorService();

        const author = await createAuthorService.execute({
            name,
            bio,
            born_at: dateOfBirth,
            died_at: dateOfDeath
        })

        return res.json(author)

    }
}

export {CreateAuthorController}
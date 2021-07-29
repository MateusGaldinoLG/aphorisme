import { Request, Response } from "express";
import { UpdateAuthorDetailsService } from "../services/UpdateAuthorDetailsService";


class UpdateAuthorDetailsController{

    async handle(req: Request, res: Response){
        const updateAuthorDetailsService = new UpdateAuthorDetailsService();

        const {name, bio, born_at, died_at} = req.body;

        const dateOfBirth = new Date(born_at);
        let dateOfDeath;
        if(died_at){
            dateOfDeath = new Date(died_at);
        }

        const newAuthor = await updateAuthorDetailsService.execute({
            name,
            bio,
            born_at: dateOfBirth,
            died_at: dateOfDeath
        })

        return res.json(newAuthor);
    }

}

export {UpdateAuthorDetailsController}
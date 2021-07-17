import { Request, Response } from "express";
import {UpdateUserDetailsService} from "../services/UpdateUserDetailsService";

class UpdateUserDetailsController{

    async handle(req: Request, res: Response){
        const {name, description, pronoun} = req.body;

        const updateUserDetailsService = new UpdateUserDetailsService();

        const user_id = req.user_id;

        const result = await updateUserDetailsService.execute({
            id: user_id,
            name,
            description,
            pronoun
        })

        return res.json(result);
    }

}

export {UpdateUserDetailsController}
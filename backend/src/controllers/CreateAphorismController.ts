import { Request, Response } from "express";
import { CreateAphorismService } from "../services/CreateAphorismService";


class CreateAphorismController{

    async handle(req: Request, res: Response){
        const {text, like, author_id, author_name} = req.body;
        const user_id = req.user_id;

        const createAphorismService = new CreateAphorismService();

        const aphorism = await createAphorismService.execute({
            text,
            like,
            user_id,
            author_id,
            author_name
        })

        return res.json(aphorism);
        
    }

}

export { CreateAphorismController }
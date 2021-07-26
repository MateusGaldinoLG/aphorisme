import { Request, Response } from "express";
import { GetAphorismByAuthorService } from "../services/GetAphorismByAuthorService";


class GetAphorismByAuthorController{

    async handle(req: Request, res: Response){
        const getAphorismByAuthorService = new GetAphorismByAuthorService();

        const author_name = req.params.authorname.replace("-", " ");

        const authorAphorism = await getAphorismByAuthorService.execute(author_name);

        return res.json(authorAphorism);
        
    }

}

export { GetAphorismByAuthorController }
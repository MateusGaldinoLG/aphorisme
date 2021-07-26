import { Request, Response } from "express";
import { GetAuthorDetailsService } from "../services/GetAuthorDetailsService"


class GetAuthorDetailsController{

    async handle(req: Request, res: Response){
        const name = req.params.authorname.replace("-", " ");

        const getAuthorDetailsService = new GetAuthorDetailsService();

        const author = await getAuthorDetailsService.execute(name)

        return res.json(author);
    }

}

export {GetAuthorDetailsController}
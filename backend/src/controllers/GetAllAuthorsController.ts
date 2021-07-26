import { Request, Response } from "express";
import { GetAllAuthorsService } from "../services/GetAllAuthorsService";


class GetAllAuthorsController{

    async handle(req: Request, res: Response){
        const getAllAuthorsService = new GetAllAuthorsService();

        const allAuthors = await getAllAuthorsService.execute();

        return res.json(allAuthors);
    }

}

export { GetAllAuthorsController }
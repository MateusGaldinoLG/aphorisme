import { Request, Response } from "express";
import { GetAllWithNameService } from "../services/GetAllWithNameService";


class GetAllWithNameController{

    async handle(req: Request, res: Response){
        const getAllWithNameService = new GetAllWithNameService();

        const name = req.params.name.replace('-', ' ');

        const allEntries = await getAllWithNameService.execute(name);

        return res.json(allEntries)
    }
}

export { GetAllWithNameController }
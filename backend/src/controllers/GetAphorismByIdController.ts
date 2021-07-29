import { Request, Response } from "express";
import { GetAphorismByIdService } from "../services/GetAphorismByIdService";


class GetAphorismByIdController{

    async handle(req: Request, res: Response){
        const getAphorismByIdService = new GetAphorismByIdService();

        const id = req.params.id

        const aphorism = await getAphorismByIdService.execute(id);

        return res.json(aphorism)
    }

}

export {GetAphorismByIdController}
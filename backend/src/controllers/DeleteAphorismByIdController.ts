import { Request, Response } from "express";
import { DeleteAphorismByIdService } from "../services/DeleteAphorismByIdService";


class DeleteAphorismByIdController{

    async handle(req: Request, res: Response){
        const deleteAphorismByIdService = new DeleteAphorismByIdService();

        const aphorism_id = req.params.aphorism;

        const result = await deleteAphorismByIdService.execute(aphorism_id);

        return res.json(result);
    }

}

export {DeleteAphorismByIdController}
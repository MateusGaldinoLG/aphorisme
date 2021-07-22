import { Request, Response } from "express";
import { UpdateAphorismLikeCountService } from "../services/UpdateAphorismLikeCountService";


class UpdateAphorismLikeCountController{

    async handle(req: Request, res: Response){

        const updateAphorismLikeCountService = new UpdateAphorismLikeCountService();

        const aphorism_id = req.params.aphorism;

        const result = await updateAphorismLikeCountService.execute(aphorism_id);

        return res.json(result);

    }

}

export {UpdateAphorismLikeCountController}
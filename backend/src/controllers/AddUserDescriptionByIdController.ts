import { Request, Response } from "express";
import { AddUserDescriptionByIdService } from "../services/AddUserDescriptionByIdService";


class AddUserDescriptionByIdController{

    async handle(req: Request, res: Response){
        const {description} = req.body;

        const addUserDescriptionByIdService = new AddUserDescriptionByIdService();

        const user_id = req.user_id

        const result = await addUserDescriptionByIdService.execute({id: user_id, description})


        return res.json(result);
    }

}

export {AddUserDescriptionByIdController}
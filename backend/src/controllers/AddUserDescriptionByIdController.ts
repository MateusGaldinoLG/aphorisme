import { Request, Response } from "express";
import { AddUserDescriptionByIdService } from "../services/AddUserDescriptionByIdService";


class AddUserDescriptionByIdController{

    async handle(req: Request, res: Response){
        const {description} = req.body;
        //console.log(description);
        //console.log(req)

        const addUserDescriptionByIdService = new AddUserDescriptionByIdService();

        const user_id = req.user_id
        //console.log(user_id)

        const result = await addUserDescriptionByIdService.execute({id: user_id, description})

        //console.log(result)

        return res.json(result);
    }

}

export {AddUserDescriptionByIdController}
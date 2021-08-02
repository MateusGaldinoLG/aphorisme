import { Request, Response } from "express";
import { GetAphorismAndUsersService } from "../services/GetAphorismAndUsersService";


class GetAphorismAndUserController{

    async handle(req: Request, res: Response){
        const getAphorismAndUserService = new GetAphorismAndUsersService();
        const aphorism_id = req.params.id;

        const response = await getAphorismAndUserService.execute(aphorism_id);

        return res.json(response);
    }
}

export {GetAphorismAndUserController}
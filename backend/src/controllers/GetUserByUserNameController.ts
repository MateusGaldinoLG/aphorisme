import { Request, Response } from "express";
import { GetUserByUserNameService } from "../services/GetUserByUsernameService";


class GetUserByUserNameController{

    async handle(req: Request, res: Response){
        const getUserByUserNameService = new GetUserByUserNameService();

        const userName = req.params.username.replace("-", " ");
        //console.log(userName)

        const user = await getUserByUserNameService.execute(userName);

        return res.json(user);

    }

}

export {GetUserByUserNameController}
import { Request, Response } from "express";
import { GetUserDetailService } from "../services/GetUserDetailService";


class GetUserDetailController{

    async handle(req: Request, res: Response){
        const getUserDetailService = new GetUserDetailService();

        const user = await getUserDetailService.execute(req.user_id);

        return res.json(user);

    }
}

export {GetUserDetailController}
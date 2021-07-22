import { Request, Response } from "express";
import { GetAphorismByUsernameService } from "../services/GetAphorismByUsernameService";


class GetAphorismByUsernameController{

    async handle(req: Request, res: Response){
        const getAphorismByUsernameService = new GetAphorismByUsernameService();

        const username = req.params.username.replace("-", " ");

        const aphorisms = await getAphorismByUsernameService.execute(username);

        return res.json(aphorisms);
    }

}

export { GetAphorismByUsernameController }
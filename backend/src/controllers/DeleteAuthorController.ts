import { Request, Response } from "express";
import { DeleteAuthorService } from "../services/DeleteAuthorService";


class DeleteAuthorController{

    async handle(req: Request, res: Response){
        const deleteAuthorService = new DeleteAuthorService();

        const id = req.params.id;

        const result = await deleteAuthorService.execute(id);

        return res.json(result);
    }
}

export {DeleteAuthorController}
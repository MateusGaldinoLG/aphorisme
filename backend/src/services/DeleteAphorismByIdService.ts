import { getCustomRepository } from "typeorm";
import { AphorismRepository } from "../repositories/AphorismRepository";


class DeleteAphorismByIdService{

    async execute(id: string){
        const aphorismRepository = getCustomRepository(AphorismRepository);

        const result = await aphorismRepository.delete({
            id
        });

        return result;
    }
}

export {DeleteAphorismByIdService}
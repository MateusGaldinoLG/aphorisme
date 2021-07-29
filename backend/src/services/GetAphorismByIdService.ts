import { getCustomRepository } from "typeorm"
import { AphorismRepository } from "../repositories/AphorismRepository"


class GetAphorismByIdService{

    async execute(id: string){
        const aphorismRepository = getCustomRepository(AphorismRepository);

        if(!id){
            throw new Error('Aphorism must have id')
        }

        const aphorismDetails = await aphorismRepository.findOne({
            id
        })

        if(!aphorismDetails){
            throw new Error(`Aphorism with id ${id} does not exist`)
        }

        return aphorismDetails;
    }

}

export {GetAphorismByIdService}
import { getCustomRepository } from "typeorm";
import { AphorismRepository } from "../repositories/AphorismRepository";


class UpdateAphorismLikeCountService{

    async execute(aphorism_id: string){
        const aphorismRepository = getCustomRepository(AphorismRepository);

        const aphorism = await aphorismRepository.findOne({
            id: aphorism_id
        })

        if(!aphorism){
            throw new Error("Aphorism does not exist")
        }

        let aphorismTotalLikes = aphorism?.like;

        aphorismTotalLikes!++;

        aphorism.like = aphorismTotalLikes;

        const newAphorism = await aphorismRepository.save(aphorism!);

        return newAphorism;

    }
}

export {UpdateAphorismLikeCountService}
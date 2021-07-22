import { EntityRepository, Repository } from "typeorm";
import { Aphorism } from "../entities/Aphorism";


@EntityRepository(Aphorism)
class AphorismRepository extends Repository<Aphorism>{}

export { AphorismRepository }
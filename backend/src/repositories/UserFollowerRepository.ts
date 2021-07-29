import { EntityRepository, Repository } from "typeorm";
import { UserFollower } from "../entities/UserFollower";


@EntityRepository(UserFollower)
class UserFollowerRepository extends Repository<UserFollower>{}

export {UserFollowerRepository}
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserFollowers1627498311098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_followers',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'follower_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserIdFollowed",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserIdFollower",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["follower_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }                                        
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_followers')
    }

}

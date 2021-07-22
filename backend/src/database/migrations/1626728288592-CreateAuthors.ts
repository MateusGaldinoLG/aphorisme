import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAuthors1626728288592 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'authors',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "bio",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "born_at",
                        type: "timestamp"
                    },
                    {
                        name: "died_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('authors')
    }

}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAphorisms1626728920282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'aphorisms',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                    },
                    {
                        name: 'like',
                        type: 'int',
                        default: '0'
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'author_id',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'author_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserIdCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKAuthorIdCompliments",
                        referencedTableName: "authors",
                        referencedColumnNames: ["id"],
                        columnNames: ["author_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('aphorisms')
    }

}

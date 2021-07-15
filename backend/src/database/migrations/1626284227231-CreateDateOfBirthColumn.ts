import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateDateOfBirthColumn1626284227231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users",
        new TableColumn({
            name: "dob",
            type: "timestamp"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "dob")
    }

}

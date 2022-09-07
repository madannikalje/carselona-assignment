import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

    @PrimaryGeneratedColumn( 'uuid' )
    id: string;

    @UpdateDateColumn()
    updatedAt: string;

    @CreateDateColumn()
    createAt: string;

    @DeleteDateColumn()
    deletedAt: string

}
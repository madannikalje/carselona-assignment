import { Column, Entity } from "typeorm";
import { BaseEntity } from ".";

@Entity( { name: 'users' } )
export class UserEntity extends BaseEntity {

    @Column( 'varchar', { nullable: false } )
    username: string

    @Column( 'varchar', { nullable: true } )
    name: string

    @Column( 'varchar', { nullable: false, unique: true } )
    email: string

    @Column( 'varchar', { nullable: false } )
    password: string
    
}
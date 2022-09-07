import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { UserEntity } from "../entities";
import { hash } from 'bcrypt'


@EventSubscriber()
export class UserEntitySubscriber implements EntitySubscriberInterface<UserEntity> {

    listenTo(): string | Function {
        return UserEntity
    }

    async beforeInsert( event: InsertEvent<UserEntity> ) {
        event.entity.password = await new Promise<string>( ( resolve, reject ) => {

            hash( event.entity.password, 10, ( err: any, encrypted: string ) => {

                if ( err ) {

                    return reject( err )

                }

                resolve( encrypted )

            } )

        } )

    }

}
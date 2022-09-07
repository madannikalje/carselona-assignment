import Container from 'typedi';
import { DataSource } from 'typeorm';
import {
    UserEntity
} from '../database/entities';
import {
    UserEntitySubscriber
} from '../database/subscribers';
import { getRepositoryToken } from '../utils';

export const bootstrapDatabase = async () => {
    const env = process.env;

    const entities = [
        UserEntity,
    ]
    const ApplicationDataSource = new DataSource( {
        type: 'mysql',
        username: env[ 'DATABASE_USER' ],
        password: env[ 'DATABASE_PASSWORD' ],
        host: env[ 'DATABASE_HOST' ],
        port: parseInt( env[ 'DATABASE_PORT' ] as string ),
        database: 'test',
        synchronize: env[ 'NODE_ENV' ] === 'development',
        entities,
        subscribers: [
            UserEntitySubscriber
        ]
    } )

    Container.set( DataSource, ApplicationDataSource )
    entities.forEach( entity => Container.set( getRepositoryToken( entity ), ApplicationDataSource.getRepository( entity ) ) )

    await ApplicationDataSource.initialize()

}
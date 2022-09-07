import { Constructable } from "typedi";
import { EntitySchema } from "typeorm";

export const getRepositoryToken = ( entity: Constructable<any> ): string => {
    if ( entity instanceof EntitySchema ) {
        return `${ entity.options.target ? entity.options.target.name : entity.options.name }Repository`
    }
    return `${entity.name}Repository`
}
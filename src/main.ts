import { bootstrapDatabase } from "./bootstraps/database";
import * as dotenv from "dotenv";

dotenv.config( );

const main = async ( ): Promise<void> => {
    await bootstrapDatabase( )
}

main();
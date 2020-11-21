import { createConnection } from "https://denolib.com/denolib/typeorm@v0.2.23-rc6/src/index.ts";
import { User } from '../user /user.entity.ts';

export function initTypeORM() {

    return createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "",
        password: "",
        database: "",
        entities: [
            User
        ],
        synchronize: false,
    });
}
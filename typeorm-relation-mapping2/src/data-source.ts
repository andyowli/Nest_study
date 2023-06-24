import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entity/Department"
import { Employee } from "./entity/Employee"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "typeorm_test",
    synchronize: true,
    logging: false,
    entities: [Department,Employee],
    migrations: [],
    subscribers: [],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
})

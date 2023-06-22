import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Aaa } from './entity/Aaa'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "study",
    synchronize: true,
    logging: false, //打印生成的 sql 语句
    entities: [User,Aaa], //指定有哪些和数据库的表对应的 Entity
    migrations: [], //修改表结构之类的 sql
    subscribers: [], //一些 Entity 生命周期的订阅者
    poolSize: 10, //指定数据库连接池中连接的最大数量
    connectorPackage: 'mysql2', //指定用什么驱动包
    extra: {
        authPlugin: 'sha256_password',
    }
})

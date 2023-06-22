import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    // @PrimaryGeneratedColumn 指定它是一个自增的主键
    @PrimaryGeneratedColumn()
    id: number

    // @Column 映射属性和字段的对应关系
    // 通过 name 指定字段名，type 指定映射的类型，length 指定长度，default 指定默认值。
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}

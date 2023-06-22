import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: 't_aaa'
})
export class Aaa {

    // @PrimaryGeneratedColumn 指定它是一个自增的主键
    @PrimaryGeneratedColumn({
        comment: '这是 id'
    })
    id: number

    // @Column 映射属性和字段的对应关系
    // 通过 name 指定字段名，type 指定映射的类型，length 指定长度，default 指定默认值。
    @Column({
        name: 'a_aa',
        type: 'text',
        comment: '这是 aaa'
    })
    aaa: string

    @Column({
        unique: true, //设置 UNIQUE 唯一索引
        nullable: false, //设置 NOT NULL 约束
        length: 10,
        type: 'varchar',
        default: 'bbb'
    })
    bbb: string

    @Column({
        type: 'double',
    })
    ccc: number
}
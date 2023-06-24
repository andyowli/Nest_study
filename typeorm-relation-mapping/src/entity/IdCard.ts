import { Column, Entity, PrimaryGeneratedColumn,JoinColumn, OneToOne } from "typeorm"
import { User } from './User'

@Entity({
    name: 'id_card'
})
export class IdCard {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
        comment: '身份证号'
    })
    cardName: string

    // 实体键的对应关系，外键
    // @JoinColumn()
    // @OneToOne(() => User,{
    //     onDelete:'CASCADE' //设置了级联删除和级联更新
    // })
    // user:User


    // 自动按照关联关系来保存
    // index.ts 不用保存await AppDataSource.manager.save(user);
    @JoinColumn()
    @OneToOne(() => User,{
        cascade:true, //这个 cascade 不是数据库的那个级联，而是告诉 typeorm 当你增删改一个 Entity 的时候，是否级联增删改它关联的 Entity。
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    user:User
}
import { Entity,PrimaryGeneratedColumn,Column,ManyToOne } from "typeorm"
import { Department } from './Department'

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

    // 使用 @ManyToOne 装饰器,添加一对多的映射
    @ManyToOne(() => Department)
    department:Department
}

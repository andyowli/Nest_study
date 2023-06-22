import { appendFile } from "fs"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // 单挑插入
    // const user = new User()
    // user.firstName = "aaa";
    // user.lastName = "bbb";
    // user.age = 25;
    // await AppDataSource.manager.save(user);
    // console.log(user);

    // 批量插入
    // await AppDataSource.manager.save(User, [
    //     { id: 1 ,firstName: 'ccc111', lastName: 'ccc', age: 21},
    //     { id: 2 ,firstName: 'ddd222', lastName: 'ddd', age: 22},
    //     { id: 3, firstName: 'eee333', lastName: 'eee', age: 23}
    // ]);

    // 删除和批量删除
    // delete 和 remove 的区别是，delete 直接传 id、而 remove 则是传入 entity 对象。
    // await AppDataSource.manager.delete(User, 2);
    // await AppDataSource.manager.delete(User, [3,4]);

    // const user = new User();
    // user.id = 1;
    // await AppDataSource.manager.remove(User, user);

    // 查询
    // const user = await AppDataSource.manager.find(User);
    // console.log(user);

    // 根据条件查询
    // const user = await AppDataSource.manager.findBy(User,{
    //     age:21
    // });
    // console.log(user);

    
    // 拿到有多少条记录
    // const [user,count] = await AppDataSource.manager.findAndCount(User);
    // console.log(user,count);
    
    // 拿到有多少条记录,指定条件
    // const [user,count] = await AppDataSource.manager.findAndCountBy(User,{
    //     age:23
    // });
    // console.log(user);
    
    // 查询一条记录
    // const user = await AppDataSource.manager.findOne(User,{
    //     select:{
    //         firstName:true,
    //         age:true
    //     },
    //     where:{
    //         id:2
    //     }
    // })
    // console.log(user);

    // const user = await AppDataSource.manager.findOneBy(User,{
    //     age:23
    // });
    // console.log(user);

    // 特殊的方法
    // findOneOrFail 或者 findOneByOrFail，如果没找到，会抛一个 EntityNotFoundError 的异常
    // try {
    //     const user = await AppDataSource.manager.findOneOrFail(User, {
    //         where: {
    //             id: 20
    //         }
    //     });
    //     console.log(user);
    // }catch(e) {
    //     console.log(e);
    //     console.log('没找到该用户');
    // }

    // query 方法直接执行 sql 语句
    // const users = await AppDataSource.manager.query('select * from user where age in(?, ?)', [21, 22]);
    // console.log(users);

    // 复杂 sql 语句不会直接写，而是会用 query builder
    // const queryBuilder = await AppDataSource.manager.createQueryBuilder();
    // const user = await queryBuilder.select("user")
    // .from(User, "user")
    // .where("user.age = :age", { age: 21 })
    // .getOne();
    // console.log(user);

    // 多条有关联的数据的增删改都离不开事务,开启事务
    await AppDataSource.manager.transaction(async manager => {
        await manager.save(User, {
            id: 2,
            firstName: 'ddd222',
            lastName: 'ddd',
            age: 22
        });
        console.log(manager);
    });
}).catch(error => console.log(error))

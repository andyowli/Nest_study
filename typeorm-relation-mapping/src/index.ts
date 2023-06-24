import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { IdCard } from "./entity/IdCard"

AppDataSource.initialize().then(async () => {

    // const user = new User();
    // user.firstName = 'guang';
    // user.lastName = 'guang';
    // user.age = 20;
    
    // const idCard = new IdCard();
    // idCard.cardName = '1111111';
    // idCard.user = user;
    
    // await AppDataSource.manager.save(user);
    // await AppDataSource.manager.save(idCard);

    
    // 查询
    // 查询结果：{ id: 1, cardName: '1111111' }
    // 查询结果中关联的 user 没查出来，声明下 relations 关联查询
    const ics = await AppDataSource.manager.find(IdCard,{
        relations:{
            user:true
        }
    });
    console.log(ics);

}).catch(error => console.log(error))

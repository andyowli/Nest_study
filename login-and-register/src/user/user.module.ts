import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  // 引入 TypeOrm.forFeature 动态模块,
  // 模块内就可以注入 User 对应的 Repository(service.ts)
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

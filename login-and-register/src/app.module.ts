import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "login-test",
      synchronize: true,
      logging: true,
      entities: [User],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      }
    }),
    JwtModule.register({
      global:true, //声明为全局模块,不用每个模块都引入
      secret:'guang',
      signOptions:{
        expiresIn:'7d'
      }
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

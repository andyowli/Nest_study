# Nest use redis

在 nest 里，可以通过 useFactory 动态创建一个 provider，在里面使用 redis 的 npm 包创建连接。

+ 在 AppModule 添加一个自定义的 provider
+ 注入到 app.service 里
+ 修改 app.controller,添加async,await

Steps to run this project:

1. Run `npm i` command
2. Run `npm start --watch` command
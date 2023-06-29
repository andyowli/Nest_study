# Node use redis

安装redis

在代码里连接 redis 服务
```
import { createClient } from 'redis';

const client = createClient({
    socket: {
        host: 'localhost',
        port: 6379
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

const value = await client.keys('*');  //redis操作

console.log(value);

await client.disconnect();
```

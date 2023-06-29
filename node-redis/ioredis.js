import Redis from 'ioredis';

const redis = new Redis();

// const res = await redis.lpush('list1','111');

const res = await redis.keys('*');

console.log(res);
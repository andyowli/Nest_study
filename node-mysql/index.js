const mysql = require('mysql2');

// 一般数据库连接方式
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '123456',
//   database: 'practice'
// });

// 连接池方式
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'practice',
  waitForConnections: true, //如果现在没有可用连接了，那就等待
  connectionLimit: 10, //指定最多有多少个连接,再多需要排队
  maxIdle: 10, //指定最多有多少个空闲的，超过这个数量的空闲连接会被释放
  idleTimeout: 60000, //空闲的连接多久会断开
  queueLimit: 0, //可以排队的请求数量,超过这个数量就返回报错,设置为 0 就是排队没有上限
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// execute()和query()之间的区别：
// query是在node装SQL语句，而 execute 则是利用MySQL 的 PreparedStatement 机制来预编译SQL语句
// execute 的优势是数据库原生支持的预编译机制，性能更高

//查询
// connection.query(
//   'SELECT * FROM customers',
//   function(err, results, fields) {
//     console.log(results);
//     console.log(fields.map(item => item.name)); 
//   }
// );

// 添加
connection.execute('INSERT INTO customers (name) VALUES (?)',
    ['光'], (err, results, fields) => {
    console.log(err);
});

// 修改
// connection.execute('UPDATE customers SET name="宇文所拓" where name="光"',
// (err) => {
//   console.log(err);
// });

// 删除
// connection.execute('DELETE  FROM customers where name=?',
//   ['宇文所拓'],
//   (err) => {
//     console.log(err);
// });
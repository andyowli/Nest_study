# Awesome Project Build with TypeORM

+ TypeORM 里一对一关系的映射通过 @OneToOne 装饰器来声明
+ 可以通过 @OneToOne 装饰器的 onDelete、onUpdate 参数设置级联删除和更新的方式
+ 可以设置 cascade，也就是 save 的时候会自动级联相关 Entity 的 save

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

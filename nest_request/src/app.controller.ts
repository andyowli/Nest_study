import { 
  Controller, 
  Get, 
  Post,
  Param, 
  Query,
  Body,
  UseInterceptors,
  UploadedFiles } from '@nestjs/common';
import { CreatePersonDto } from './api/api';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // query 方式
  // query 是 url 中 ? 后的字符串
  // 通过 @Query 装饰器来取
  @Get('find')
  qurey(@Query('name') name:string,@Query('age') age:number) {
    return `received : name = ${name},age = ${age}`
  }


  // url param 方式
  // url param 是 url 中的参数，Nest 里通过 :参数名 的方式来声明
  // 通过 @Param(参数名) 的装饰器取出
  @Get(':id')
  urlParam(@Param('id') id:string) {
    return `received : id = ${id}`
  }

  // form urlencoded 方式
  // @Post()
  // body(@Body() CreatePersonDto:CreatePersonDto) {
  //   return `received:${JSON.stringify(CreatePersonDto)}`
  // }

  //json 方式
  @Post()
  body(@Body() CreatePersonDto:CreatePersonDto) {
    return `received:${JSON.stringify(CreatePersonDto)}`
  }

  //传递文件
  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest:'uploads/'
  }))
  body2(@Body() CreatePersonDto:CreatePersonDto, @UploadedFiles() files:Array<Express.Multer.File>){
    console.log(files);
    return `${JSON.stringify(CreatePersonDto)}`
  }
}

import { Module,OnModuleInit,OnApplicationBootstrap,OnModuleDestroy,BeforeApplicationShutdown,OnApplicationShutdown } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService]
})
export class DddModule implements OnModuleInit,OnApplicationBootstrap,OnModuleDestroy,BeforeApplicationShutdown,OnApplicationShutdown{
  onModuleDestroy() {
    console.log('DddController OnModuleDestroy');
  }

  beforeApplicationShutdown(signal: string) {
    console.log('DddController beforeApplicationShutdown', signal);
  }

  onApplicationShutdown() {
    console.log('DddController onApplicationShutdown');
  }

  onModuleInit(){
    console.log('DddModule OnModuleInit')
  }

  onApplicationBootstrap(){
    console.log('DddModule OnApplicationBootstrap')
  }
}

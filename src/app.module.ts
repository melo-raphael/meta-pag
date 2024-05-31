import { Module } from '@nestjs/common';
import { CalcularController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CalcularController],
  providers: [AppService],
})
export class AppModule {}

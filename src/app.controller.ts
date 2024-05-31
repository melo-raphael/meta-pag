import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestCalculoDto, RequestPorcentagemDto } from './request.dto';

@Controller()
export class CalcularController {
  constructor(private readonly appService: AppService) {}

  @Post('/calcular/porcentagem')
  calculoPorcentagem(@Body() request: RequestPorcentagemDto): any {
    return this.appService.calculoPorcentagem(request);
  }

  @Post('/calcular')
  calculo(@Body() request: RequestCalculoDto): any {
    return this.appService.calculo(request);
    const response = {data: {resultado: 200}}
    return response
  }
}

import { Injectable } from '@nestjs/common';
import { RequestCalculoDto, RequestPorcentagemDto } from './request.dto';

@Injectable()
export class AppService {
  calculoPorcentagem(dto: RequestPorcentagemDto): any {
    const result = this.resolveValoresPorcentagemPorFaixa(dto.tpvLegado, 0.2) + 
        this.resolveValoresPorcentagemPorFaixa(dto.margemOperacionalLegado, 0.3) + 
        this.resolveValoresPorcentagemPorFaixa(dto.tpvNovo, 0.2) + 
        this.resolveValoresPorcentagemPorFaixa(dto.margemOperacionalNovo, 0.3);

    return {resultado: result.toFixed(2)};
  }

  calculo(dto: RequestCalculoDto): any{
    const result = this.resolveValorPorFaixa(dto.tpvLegado, dto.tpvLegadoMeta, 0.2) + 
        this.resolveValorPorFaixa(dto.margemOperacionalLegado, dto.margemOperacionalLegadoMeta, 0.3) +
        this.resolveValorPorFaixa(dto.tpvNovo, dto.tpvNovoMeta, 0.2) +
        this.resolveValorPorFaixa(dto.margemOperacionalNovo, dto.margemOperacionalNovoMeta, 0.3);

    return {resultado: result.toFixed(2)};
  }

  private resolveValoresPorcentagemPorFaixa(valor: number, peso: number): number{
    if(valor < 70){
      return 0;
    }
    if(valor >= 70 && valor < 100){
      return valor * peso;
    }
    if(valor >= 100 && valor < 150){
      return valor * peso;;
    }
    if(valor >= 150){
      return (peso * 100) * 1.5;
    }

  }

  private resolveValorPorFaixa(valor: number, meta: number, peso: number): number{
    if((70/100 * meta) > valor ){
        return 0;
    }

    if((70/100 * meta) <= valor && (100/100 * meta) > valor){
      console.log((valor * peso/meta) * 100)
      return (valor * peso/meta) * 100;
    }

    if((100/100 * meta) <= valor && (150/100 * meta) > valor){
      console.log((valor * peso/meta) * 100)
      return (valor * peso/meta) * 100;
    }

    if((150/100 * meta) <= valor){
      console.log((peso * 100) * 1.5)
      return (peso * 100) * 1.5;
    } 
  }
}

import { ApiProperty } from '@nestjs/swagger';
import {
    IsNumber,
} from 'class-validator';


export class RequestPorcentagemDto {
    @ApiProperty({ example: 1 })
    @IsNumber()
    margemOperacionalLegado: number;


    @ApiProperty({ example: 1 })
    @IsNumber()
    margemOperacionalNovo: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    tpvLegado: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    tpvNovo: number;

}

export class RequestCalculoDto extends RequestPorcentagemDto{
    @ApiProperty({ example: 1 })
    @IsNumber()
    margemOperacionalLegadoMeta: number;


    @ApiProperty({ example: 1 })
    @IsNumber()
    margemOperacionalNovoMeta: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    tpvLegadoMeta: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    tpvNovoMeta: number;
}

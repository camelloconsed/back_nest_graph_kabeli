import { Controller, Get } from '@nestjs/common';
import { IndicatorsService } from "./indicators.service"
import { Indicator } from './interfaces/Indicator';
@Controller('indicators')
export class IndicatorsController {
    constructor( private indicatorsService: IndicatorsService) {}
    @Get()
    async getIndicators(): Promise<Indicator> {
       return await this.indicatorsService.getIndicators()
        
    }
}

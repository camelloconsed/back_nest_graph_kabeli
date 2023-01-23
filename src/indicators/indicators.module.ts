
import { Module } from '@nestjs/common';
import { IndicatorsController } from './indicators.controller';
import { IndicatorsService } from './indicators.service';
import { HttpModule } from '@nestjs/axios';
import { IndicatorsResolver } from './indicators.resolver';


@Module({
    imports: [HttpModule],
    controllers: [IndicatorsController],
    providers: [IndicatorsService, IndicatorsResolver] 
})
export class IndicatorsModule {}

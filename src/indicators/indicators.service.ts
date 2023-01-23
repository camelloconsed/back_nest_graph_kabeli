import { Injectable } from '@nestjs/common';
import {Indicator} from "./interfaces/Indicator"
import axios from 'axios';

@Injectable()
export class IndicatorsService {

    async getIndicators(): Promise<Indicator> {
        const response = await axios({
            method: 'get',
            url: 'https://mindicador.cl/api',
        });        
        return response.data       
    }
}

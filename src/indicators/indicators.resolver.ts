import { Query, Resolver } from '@nestjs/graphql';
import { IndicatorsService } from './indicators.service';
import { Indicator } from './models/indicator.model';

@Resolver((of) => Indicator)
export class IndicatorsResolver {
  constructor(private indicatorsService: IndicatorsService) {}

  @Query(() => Indicator, {
    description: 'Get all economy indicators from the api',
  })
  async getData(): Promise<Indicator> {
    const response = await this.indicatorsService.getIndicators();
    return response;
  }
}

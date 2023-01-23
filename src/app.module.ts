import { join } from 'path';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicatorsController } from './indicators/indicators.controller';
import { IndicatorsService } from './indicators/indicators.service';
import { IndicatorsModule } from './indicators/indicators.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'

@Module({
  imports: [IndicatorsModule, 
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // debug: false,
    // playground:false,
    // plugins: [
    //   ApolloServerPluginLandingPageLocalDefault
    // ]
    }),
    HttpModule],
  controllers: [AppController, IndicatorsController],
  providers: [AppService, IndicatorsService],
})
export class AppModule {}

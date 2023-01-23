import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Data } from './data.model';

@ObjectType()
export class Indicator {
    @Field()
  version: string;

  @Field()
  autor: string;

  @Field()
  fecha: string;

  @Field(type => Data)
  uf: Data;

  @Field(type => Data)
  ivp: Data;

  @Field(type => Data)
  dolar: Data;

  @Field(type => Data)
  dolar_intercambio: Data;

  @Field(type => Data)
  euro: Data;

  @Field(type => Data)
  ipc: Data;

  @Field(type => Data)
  utm: Data;

  @Field(type => Data)
  imacec: Data;

  @Field(type => Data)
  tpm: Data;

  @Field(type => Data)
  libra_cobre: Data;

  @Field(type => Data)
  tasa_desempleo: Data;

  @Field(type => Data)
  bitcoin: Data;
}

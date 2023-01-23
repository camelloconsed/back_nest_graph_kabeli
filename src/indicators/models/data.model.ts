import { Field, Float, ObjectType,  } from '@nestjs/graphql';

@ObjectType()
export class Data {
    @Field()
    codigo: string;
  
    @Field()
    nombre: string;
  
    @Field()
    unidad_medida: string;
  
    @Field()
    fecha: string;
  
    @Field( type => Float )
    valor: number;

}
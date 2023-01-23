  interface Data {
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha:string;
    valor: number;
 }
 
 export interface Indicator {
    version: string;
    autor: string;
    fecha: string;
    uf: Data;
    ivp: Data;    
    dolar: Data;
    dolar_intercambio: Data;
    euro: Data;
    ipc: Data;
    utm: Data;
    imacec: Data;
    tpm: Data;
    libra_cobre: Data;
    tasa_desempleo: Data;
    bitcoin: Data;
} 
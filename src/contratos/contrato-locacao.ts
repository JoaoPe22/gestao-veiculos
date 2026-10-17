import { Veiculo } from "../veiculos/veiculo";

interface ContratoLocacao {
  cliente: string;
  veiculo: Veiculo;
  dias: number;
  seguro: string;
  tarifa: string;
  gps?: boolean;
  cadeirinha?: boolean;
  valorTotal: number;
}

export type { ContratoLocacao };

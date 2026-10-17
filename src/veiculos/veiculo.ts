interface Veiculo {
  placa: string;
  modelo: string;
  valorDiaria: number;
  acessorios: string[];
  clone(): Veiculo;
}

export type { Veiculo };

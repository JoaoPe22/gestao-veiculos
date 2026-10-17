interface Tarifa {
  descricao(): string;
  calcular(valorDiaria: number, dias: number): number;
}

export type { Tarifa };

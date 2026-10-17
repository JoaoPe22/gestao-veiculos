import { Tarifa } from "./tarifa";

class TarifaPremium implements Tarifa {
  descricao(): string {
    return "Tarifa premium: km livre (+ R$ 30 por dia)";
  }

  calcular(valorDiaria: number, dias: number): number {
    return (valorDiaria + 30) * dias;
  }
}

export { TarifaPremium };

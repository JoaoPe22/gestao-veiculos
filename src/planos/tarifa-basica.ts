import { Tarifa } from "./tarifa";

class TarifaBasica implements Tarifa {
  descricao(): string {
    return "Tarifa básica: limite de 100 km por dia";
  }

  calcular(valorDiaria: number, dias: number): number {
    return valorDiaria * dias;
  }
}

export { TarifaBasica };

import { Seguro } from "./seguro";

class SeguroCompleto implements Seguro {
  descricao(): string {
    return "Seguro completo: cobertura total";
  }

  valorPorDia(): number {
    return 50;
  }
}

export { SeguroCompleto };

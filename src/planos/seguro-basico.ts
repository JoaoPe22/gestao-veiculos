import { Seguro } from "./seguro";

class SeguroBasico implements Seguro {
  descricao(): string {
    return "Seguro básico: cobre apenas terceiros";
  }

  valorPorDia(): number {
    return 20;
  }
}

export { SeguroBasico };

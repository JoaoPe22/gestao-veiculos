import { FabricaPlano } from "./fabrica-plano";
import { Seguro } from "./seguro";
import { SeguroCompleto } from "./seguro-completo";
import { Tarifa } from "./tarifa";
import { TarifaPremium } from "./tarifa-premium";

class FabricaPlanoPremium implements FabricaPlano {
  criarSeguro(): Seguro {
    return new SeguroCompleto();
  }

  criarTarifa(): Tarifa {
    return new TarifaPremium();
  }
}

export { FabricaPlanoPremium };

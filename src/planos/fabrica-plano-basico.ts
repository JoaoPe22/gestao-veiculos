import { FabricaPlano } from "./fabrica-plano";
import { Seguro } from "./seguro";
import { SeguroBasico } from "./seguro-basico";
import { Tarifa } from "./tarifa";
import { TarifaBasica } from "./tarifa-basica";

class FabricaPlanoBasico implements FabricaPlano {
  criarSeguro(): Seguro {
    return new SeguroBasico();
  }

  criarTarifa(): Tarifa {
    return new TarifaBasica();
  }
}

export { FabricaPlanoBasico };

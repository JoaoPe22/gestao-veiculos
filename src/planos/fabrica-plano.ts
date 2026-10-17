import { Seguro } from "./seguro";
import { Tarifa } from "./tarifa";

interface FabricaPlano {
  criarSeguro(): Seguro;
  criarTarifa(): Tarifa;
}

export type { FabricaPlano };

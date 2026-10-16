import { Veiculo } from "./veiculo";

class Carro implements Veiculo {
  valorDiaria = 150;

  constructor(public placa: string, public modelo: string) {}
}

export { Carro };

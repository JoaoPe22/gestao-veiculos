import { Veiculo } from "./veiculo";

class Moto implements Veiculo {
  valorDiaria = 80;

  constructor(public placa: string, public modelo: string) {}
}

export { Moto };

import { Veiculo } from "./veiculo";

class Carro implements Veiculo {
  valorDiaria = 150;

  constructor(
    public placa: string,
    public modelo: string,
    public acessorios: string[] = []
  ) {}

  clone(): Carro {
    return new Carro(this.placa, this.modelo, [...this.acessorios]);
  }
}

export { Carro };

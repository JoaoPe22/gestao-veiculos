import { Veiculo } from "./veiculo";

class Moto implements Veiculo {
  valorDiaria = 80;

  constructor(
    public placa: string,
    public modelo: string,
    public acessorios: string[] = []
  ) {}

  clone(): Moto {
    return new Moto(this.placa, this.modelo, [...this.acessorios]);
  }
}

export { Moto };

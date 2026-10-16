import { Veiculo } from "../veiculos/veiculo";

class Frota {
  private static instancia?: Frota;
  private veiculos: Veiculo[] = [];

  private constructor() {}

  static getInstancia(): Frota {
    if (!Frota.instancia) {
      Frota.instancia = new Frota();
    }
    return Frota.instancia;
  }

  adicionar(veiculo: Veiculo): void {
    this.veiculos.push(veiculo);
  }

  listar(): Veiculo[] {
    return [...this.veiculos];
  }
}

export { Frota };

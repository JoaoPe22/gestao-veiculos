import { CadastrarVeiculo } from "./cadastrar-veiculo";
import { Moto } from "./moto";
import { Veiculo } from "./veiculo";

class CadastrarMoto extends CadastrarVeiculo {
  criarVeiculo(placa: string, modelo: string): Veiculo {
    return new Moto(placa, modelo);
  }
}

export { CadastrarMoto };

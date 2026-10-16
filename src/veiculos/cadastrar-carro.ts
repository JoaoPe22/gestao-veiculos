import { CadastrarVeiculo } from "./cadastrar-veiculo";
import { Carro } from "./carro";
import { Veiculo } from "./veiculo";

class CadastrarCarro extends CadastrarVeiculo {
  criarVeiculo(placa: string, modelo: string): Veiculo {
    return new Carro(placa, modelo);
  }
}

export { CadastrarCarro };

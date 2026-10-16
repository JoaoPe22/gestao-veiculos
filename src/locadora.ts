import { CadastrarVeiculo } from "./veiculos/cadastrar-veiculo";
import { Frota } from "./frota/frota";

class Locadora {
  constructor(private cadastro: CadastrarVeiculo) {}

  receberVeiculo(placa: string, modelo: string): void {
    const veiculo = this.cadastro.criarVeiculo(placa, modelo);
    Frota.getInstancia().adicionar(veiculo);
  }
}

export { Locadora };

import { Veiculo } from "./veiculo";

abstract class CadastrarVeiculo {
  abstract criarVeiculo(placa: string, modelo: string): Veiculo;
}

export { CadastrarVeiculo };

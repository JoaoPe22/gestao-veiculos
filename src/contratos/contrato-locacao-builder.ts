import { ContratoLocacao } from "./contrato-locacao";
import { FabricaPlano } from "../planos/fabrica-plano";
import { Veiculo } from "../veiculos/veiculo";

class ContratoLocacaoBuilder {
  private clienteContrato = "";
  private veiculoContrato?: Veiculo;
  private diasContrato = 1;
  private fabricaPlano?: FabricaPlano;
  private gpsContrato = false;
  private cadeirinhaContrato = false;

  cliente(nome: string) {
    this.clienteContrato = nome;
    return this;
  }

  veiculo(v: Veiculo) {
    this.veiculoContrato = v;
    return this;
  }

  dias(quantidade: number) {
    this.diasContrato = quantidade;
    return this;
  }

  plano(fabrica: FabricaPlano) {
    this.fabricaPlano = fabrica;
    return this;
  }

  gps() {
    this.gpsContrato = true;
    return this;
  }

  cadeirinha() {
    this.cadeirinhaContrato = true;
    return this;
  }

  build(): ContratoLocacao {
    if (!this.veiculoContrato || !this.fabricaPlano) {
      throw new Error("Veículo e plano são obrigatórios");
    }

    const seguro = this.fabricaPlano.criarSeguro();
    const tarifa = this.fabricaPlano.criarTarifa();

    let valorTotal =
      tarifa.calcular(this.veiculoContrato.valorDiaria, this.diasContrato) +
      seguro.valorPorDia() * this.diasContrato;
    if (this.gpsContrato) valorTotal += 10 * this.diasContrato;
    if (this.cadeirinhaContrato) valorTotal += 15 * this.diasContrato;

    const c: ContratoLocacao = {
      cliente: this.clienteContrato,
      veiculo: this.veiculoContrato,
      dias: this.diasContrato,
      seguro: seguro.descricao(),
      tarifa: tarifa.descricao(),
      valorTotal,
    };
    if (this.gpsContrato) c.gps = true;
    if (this.cadeirinhaContrato) c.cadeirinha = true;
    return c;
  }
}

export { ContratoLocacaoBuilder };

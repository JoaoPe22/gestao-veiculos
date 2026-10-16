import { Locadora } from "./locadora";
import { CadastrarCarro } from "./veiculos/cadastrar-carro";
import { CadastrarMoto } from "./veiculos/cadastrar-moto";
import { Frota } from "./frota/frota";

const setorCarros = new Locadora(new CadastrarCarro());
setorCarros.receberVeiculo("ABC1D23", "Onix");
setorCarros.receberVeiculo("DEF4G56", "HB20");

const setorMotos = new Locadora(new CadastrarMoto());
setorMotos.receberVeiculo("GHI7J89", "CG 160");

console.log("Frota:", Frota.getInstancia().listar());
console.log("Mesma instância?", Frota.getInstancia() === Frota.getInstancia());

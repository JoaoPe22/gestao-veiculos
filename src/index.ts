import { Locadora } from "./locadora";
import { CadastrarCarro } from "./veiculos/cadastrar-carro";
import { CadastrarMoto } from "./veiculos/cadastrar-moto";
import { Frota } from "./frota/frota";
import { ContratoLocacaoBuilder } from "./contratos/contrato-locacao-builder";
import { FabricaPlanoBasico } from "./planos/fabrica-plano-basico";
import { FabricaPlanoPremium } from "./planos/fabrica-plano-premium";

const setorCarros = new Locadora(new CadastrarCarro());
setorCarros.receberVeiculo("ABC1D23", "Onix");
setorCarros.receberVeiculo("DEF4G56", "HB20");

const setorMotos = new Locadora(new CadastrarMoto());
setorMotos.receberVeiculo("GHI7J89", "CG 160");

console.log("Frota:", Frota.getInstancia().listar());
console.log("Mesma instância?", Frota.getInstancia() === Frota.getInstancia());

const [onix, hb20] = Frota.getInstancia().listar();

const contratoBasico = new ContratoLocacaoBuilder()
  .cliente("Maria")
  .veiculo(onix)
  .dias(3)
  .plano(new FabricaPlanoBasico())
  .build();

const contratoPremium = new ContratoLocacaoBuilder()
  .cliente("João")
  .veiculo(hb20)
  .dias(4)
  .plano(new FabricaPlanoPremium())
  .gps()
  .cadeirinha()
  .build();

console.log("Contrato básico:", contratoBasico);
console.log("Contrato premium:", contratoPremium);

onix.acessorios.push("Ar-condicionado", "Câmera de ré");

const onixCopia = onix.clone();
onixCopia.placa = "JKL0M12";
onixCopia.acessorios.push("Engate");
Frota.getInstancia().adicionar(onixCopia);

console.log("Onix original:", onix);
console.log("Onix clonado:", onixCopia);
console.log("Frota após clonagem:", Frota.getInstancia().listar());

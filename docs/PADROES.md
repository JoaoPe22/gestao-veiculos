# Padrões Criacionais Utilizados

## Factory Method
**Onde:** `src/veiculos/cadastrar-veiculo.ts`, `src/veiculos/cadastrar-carro.ts`, `src/veiculos/cadastrar-moto.ts`

**Problema:** a locadora cadastra tipos diferentes de veículo (carro e moto). Decidir o tipo com `if` obrigaria editar a classe sempre que surgisse um novo veículo.

**Por quê:** `CadastrarVeiculo` declara o método abstrato `criarVeiculo()`, e cada subclasse decide qual veículo concreto criar. A `Locadora` conhece apenas o creator abstrato. Um novo tipo de veículo exige só duas classes novas, sem alterar a `Locadora`.

## Singleton
**Onde:** `src/frota/frota.ts`

**Problema:** todas as partes do sistema precisam enxergar a mesma lista de veículos. Duas frotas diferentes deixariam os dados inconsistentes.

**Por quê:** o construtor é privado e o acesso é feito apenas por `Frota.getInstancia()`, que cria a instância na primeira chamada e devolve sempre a mesma depois.

## Abstract Factory
**Onde:** `src/planos/fabrica-plano.ts`, `src/planos/fabrica-plano-basico.ts`, `src/planos/fabrica-plano-premium.ts`

**Problema:** cada plano de locação é formado por um seguro e uma tarifa que precisam combinar. Não pode existir um contrato com seguro básico e tarifa premium.

**Por quê:** `FabricaPlano` define a criação da família inteira (`criarSeguro()` e `criarTarifa()`). Cada fábrica concreta só conhece as classes do seu próprio plano, então é impossível misturar peças de planos diferentes.

## Builder
**Onde:** `src/contratos/contrato-locacao-builder.ts`

**Problema:** o contrato de locação tem partes obrigatórias (cliente, veículo, dias, plano) e opcionais (GPS, cadeirinha). Um único construtor viraria uma lista confusa de parâmetros com vários `undefined`.

**Por quê:** cada parte do contrato tem o seu próprio método, que devolve o builder para encadear as chamadas. O contrato só é montado no `build()`, que também calcula o valor total usando o plano criado pela Abstract Factory.

## Prototype
**Onde:** `src/veiculos/carro.ts` e `src/veiculos/moto.ts` (método `clone()`)

**Problema:** a locadora possui vários veículos do mesmo modelo, com os mesmos acessórios. Cadastrar cada um do zero é repetitivo.

**Por quê:** o próprio veículo sabe se copiar pelo `clone()`, criando uma nova lista de acessórios (`[...this.acessorios]`). Assim, alterar a cópia (placa, novos acessórios) nunca afeta o veículo original.

## Integração
Em `src/index.ts`: os veículos são criados pelo **Factory Method** e guardados na **Frota** (Singleton). O **Builder** monta os contratos usando veículos da Frota e planos da **Abstract Factory**. O **Prototype** gera novos veículos a partir de um já cadastrado.

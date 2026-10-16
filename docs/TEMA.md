# Tema: Sistema de Aluguel de Veículos

## Domínio
Uma locadora aluga carros e motos para clientes.
O cliente escolhe um veículo disponível, um plano (Básico ou Premium)
e, se quiser, opcionais como GPS e cadeirinha infantil.
Ao final, o sistema gera um contrato de locação com o valor total.

## Principais elementos
- **Veículo**: carro ou moto, com placa, modelo, valor da diária e acessórios.
- **Frota**: lista única de todos os veículos da locadora.
- **Plano**: conjunto de seguro + tarifa que precisam combinar entre si.
- **Contrato de locação**: cliente, veículo, quantidade de dias, plano e opcionais.

## Planejamento dos padrões
| Padrão | Onde será usado | Problema que resolve |
|---|---|---|
| Factory Method | Cadastro de veículos (carro, moto) | Cada tipo de cadastro decide qual veículo concreto criar, sem `if` por tipo. |
| Singleton | Frota | O sistema inteiro precisa usar a mesma lista de veículos. |
| Abstract Factory | Planos de locação (Básico, Premium) | Seguro e tarifa devem ser sempre do mesmo plano, sem misturar. |
| Builder | Contrato de locação | O contrato tem partes opcionais (GPS, cadeirinha); evita construtor gigante. |
| Prototype | Veículos da frota | Cadastrar vários veículos do mesmo modelo clonando um já pronto e mudando só a placa. |

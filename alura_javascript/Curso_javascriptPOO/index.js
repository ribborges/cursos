import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 12345678;

const contaRicardo = new Conta;
contaRicardo.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 33322211109;

const valorSacado = contaRicardo.sacar(50);

console.log(cliente1);
console.log(cliente2);
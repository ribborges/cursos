import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 12345678;

const contaRicardo = new Conta();
contaRicardo.cliente = cliente1;
contaRicardo.agencia = 1001;

contaRicardo.depositar(500);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 33322211109;

const contaAlice = new Conta();
contaRicardo.cliente = cliente2;
contaRicardo.agencia = 1002;

contaAlice.depositar(500);

const valorSacado = contaRicardo.sacar(50);

let val = 200;
contaRicardo.transferir(val, contaAlice);

console.log(contaRicardo);
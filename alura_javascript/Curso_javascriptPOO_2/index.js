import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309, 12345678);
const contaRicardo = new Conta(0, cliente1, 1001);
contaRicardo.depositar(500);

const valorSacado = contaRicardo.sacar(50);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaRicardo);
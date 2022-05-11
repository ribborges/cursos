import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

const contaRicardo = new Conta(new Cliente("Ricardo", 11122233309, 12345678), 1001);
contaRicardo.depositar(500);

const contaAlice = new Conta(new Cliente("Alice", 33322211109, null), 1002);
contaAlice.depositar(500);

const valorSacado = contaRicardo.sacar(50);

let val = 200;
contaRicardo.transferir(val, contaAlice);

console.log(contaRicardo);
console.log(contaAlice);

console.log(Conta.nContas);
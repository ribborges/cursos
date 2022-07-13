import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import {Conta} from "./Conta/Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309, 12345678);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);


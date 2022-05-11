import {Cliente} from "./Cliente.js"

export class Conta{
    static nContas = 0;

    //Public
    _cliente;
    agencia;

    //Private
    _saldo = 0;

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        Conta.nContas += 1;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    set cliente(val){
        if(val instanceof Cliente)
            this._cliente = val;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        
        this._saldo += valor;
    }

    transferir(valor, conta){
        const sacado = this.sacar(valor);
        conta.depositar(sacado);
    }
}
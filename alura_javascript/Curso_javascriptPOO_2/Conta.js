export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
// Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta");
        }

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
        throw new Error("O método Sacar é um método abstrato");
    }

    _sacar(valor){
        const valorSacado = taxa * valor;

        if(this._saldo >= valor){
            this._saldo -= valor;
            return valorSacado;
        }

        return 0;
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
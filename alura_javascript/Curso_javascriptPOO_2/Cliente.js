export class Cliente{
    constructor(nome, cpf, senha, rg){
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
        this._rg = rg;
    }

    get cpf(){
        return this._cpf;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}
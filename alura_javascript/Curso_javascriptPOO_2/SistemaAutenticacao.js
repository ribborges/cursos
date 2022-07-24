export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.canlogin(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static canlogin(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}
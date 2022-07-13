import { Cliente } from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345678");
const gerente = new Gerente("Ricardo", 5000, 12345678900);

const login = SistemaAutenticacao.login(diretor, "12345678");

console.log(login);
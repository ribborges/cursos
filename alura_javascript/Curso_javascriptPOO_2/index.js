import { Cliente } from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345678");
const gerente = new Gerente("Ricardo", 5000, 12345678900);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Lais", 12312312300, "456", 112223330);

const gerentelogin = SistemaAutenticacao.login(gerente, "12345678");
const diretorlogin = SistemaAutenticacao.login(diretor, "12345678");
const clientelogin = SistemaAutenticacao.login(diretor, "12345678");

console.log(login);
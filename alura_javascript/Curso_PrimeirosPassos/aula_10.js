console.log("Aula 10: Break");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
const acompanhado = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos: ");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || acompanhado;

let contador = 0;
let destinoEncontrado = false;

while(contador < listaDestinos.length){
    if(listaDestinos[contador] == destino){
        destinoEncontrado = true;
        break;
    }
    contador++;
}

destinoEncontrado ? console.log("Destino encontrado") : console.log("Destino não encontrado");
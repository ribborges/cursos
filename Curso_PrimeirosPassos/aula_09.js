console.log("Aula 09: While");

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

while(contador < listaDestinos.length){
    if(listaDestinos[contador] == destino){
        console.log("Destino encontrado");
    } else{
        console.log("Destino não encontrado");
    }
    contador++;
}
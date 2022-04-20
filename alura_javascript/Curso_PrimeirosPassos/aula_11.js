console.log("Aula 11: For");

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

let destinoEncontrado = false;

for(let i = 0; i < listaDestinos.length; i++){
    if(listaDestinos[i] == destino){
        destinoEncontrado = true;
        break;
    }
}

destinoEncontrado ? console.log("Destino encontrado") : console.log("Destino não encontrado");

if(podeComprar && destinoEncontrado){
    console.log("Boa viagem!");
} else{
    console.log("Erro");
}
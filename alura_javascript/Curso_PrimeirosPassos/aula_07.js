console.log("Aula 07: If encadeado");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
const acompanhado = true;

console.log("Destinos: ");
console.log(listaDestinos);

if(idadeComprador >= 18){
    console.log("Compra aprovada");
    listaDestinos.splice(1, 1);
} else if(acompanhado){
        console.log("Compra aprovada");
        listaDestinos.splice(1, 1);
} else{
    console.log("Compra negada");
}

console.log("Destinos: ");
console.log(listaDestinos);
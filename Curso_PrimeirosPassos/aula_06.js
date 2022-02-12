console.log("Aula 06: Operadores lógicos");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;

console.log("Destinos: ");
console.log(listaDestinos);

if(idadeComprador >= 18){
    console.log("Compra aprovada");
    listaDestinos.splice(1, 1);
}else{
    console.log("Compra negada");
}

console.log("Destinos: ");
console.log(listaDestinos);
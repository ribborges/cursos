console.log("Aula 08: Operadores logicos encadeados");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
const acompanhado = true;
const temPassagemComprada = true;

console.log("Destinos: ");
console.log(listaDestinos);

if(idadeComprador >= 18 || acompanhado){
    console.log("Compra aprovada");
    listaDestinos.splice(1, 1);
} else{
    console.log("Compra negado");
}

console.log("Embarco... \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else{
    console.log("Embarque negado");
}

console.log("Destinos: ");
console.log(listaDestinos);
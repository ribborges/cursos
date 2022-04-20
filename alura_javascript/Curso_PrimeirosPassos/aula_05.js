console.log("Aula 05: Listas");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioJaneiro = `Rio de Janeiro`;

// console.log("Destinos: ");
// console.log(salvador, saoPaulo, rioJaneiro);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`);
console.log("Destinos: ");
console.log(listaDestinos);

listaDestinos.splice(1, 1);
console.log("Destinos: ");
console.log(listaDestinos);

console.log(listaDestinos[0], listaDestinos[1]);
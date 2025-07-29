let numbers = [];
let input;

do {
    input = window.prompt("Entrez un nombre entier, rentrez 0 pour confirmé les nombres.:");
    input = Number(input);
    if (input !== 0) {
        numbers.push(input);
    }
} while (input !== 0);


let count = numbers.length;
let sum = numbers.reduce((a, b) => a + b, 0);
let average = count > 0 ? sum / count : 0;

console.log("Nombre de nombres entrés : " + count);
console.log("Somme des nombres : " + sum);
console.log("Moyenne des nombres entrés : " + average);
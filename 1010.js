let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let linha1 = lines.shift().split(' ');
let linha2 = lines.shift().split(' ');

let quantidadePeca1 = linha1[1];
let quantidadePeca2 = linha2[1];
let valorPeca1 = linha1[2];
let valorPeca2 = linha2[2];

let totalPeca1 = quantidadePeca1 * valorPeca1;
let totalPeca2 = quantidadePeca2 * valorPeca2;

let total = (totalPeca1 + totalPeca2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${total}`);
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let nomeVendedor = lines.shift();
let salarioFixo = Number(lines.shift());
let vendas = Number(lines.shift());

let total = (salarioFixo + 0.15 * vendas).toFixed(2);

console.log(`TOTAL = R$ ${total}`)
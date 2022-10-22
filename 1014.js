const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valores = input.split('\n');

let distanciaPercorrida = parseInt(valores[0]);
let combustivelGasto = parseFloat(valores[1]);

let consumoMedio = (distanciaPercorrida / combustivelGasto).toFixed(3);

console.log(`${consumoMedio} km/l`);
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valores = input.split('\n');

let ponto1 = valores[0].split(' ');
let ponto2 = valores[1].split(' ');

let [x1, y1] = ponto1.map(item => parseFloat(item));
let [x2, y2] = ponto2.map(item => parseFloat(item));

let distancia = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4);

console.log(distancia);
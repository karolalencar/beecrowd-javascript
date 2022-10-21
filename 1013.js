const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valores = input.split(' ').map(item => parseInt(item));

let [A, B, C] = valores;

let MaiorAB = (A + B + Math.abs(A - B)) / 2;

let MaiorABC = (MaiorAB + C + Math.abs(MaiorAB - C)) / 2;

console.log(`${MaiorABC} eh o maior`);
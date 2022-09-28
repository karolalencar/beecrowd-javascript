let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let raio = lines.shift();
const pi = 3.14159;

let volume = ((4.0/3) * pi * Math.pow(raio, 3)).toFixed(3);

console.log(`VOLUME = ${volume}`);

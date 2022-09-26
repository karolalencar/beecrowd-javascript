let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

const pi = 3.14159;
let radius = Number(lines.shift());
let area = (radius * radius * pi).toFixed(4);

console.log(`A=${area}`);
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());

let media = (A * 0.2 + B * 0.3 + C * 0.5).toFixed(1);

console.log(`MEDIA = ${media}`);
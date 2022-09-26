let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let PROD = A * B;

console.log(`PROD = ${PROD}`);
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let A = Number(lines.shift());
let B = Number(lines.shift());

let media = ((3.5 * A + 7.5 * B) / 11).toFixed(5);

console.log(`MEDIA = ${media}`);
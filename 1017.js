const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const valores = input.split('\n');

let [tempo, velocidade] = valores.map(item => parseInt(item));

let gasolinaGasta = ((tempo * velocidade) / 12.0).toFixed(3);

console.log(gasolinaGasta);
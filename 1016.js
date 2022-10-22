const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valor = parseInt(input);

let tempoNecessario = valor * 2;

console.log(`${tempoNecessario} minutos`);

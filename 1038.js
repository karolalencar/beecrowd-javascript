const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valores = input.split(' ');
let [ codigo, quantidade ] = valores.map(item => parseInt(item));

let total = 0;

if (codigo === 1) {
    total = quantidade * 4.0;
} else if (codigo === 2) {
    total = quantidade * 4.5;
} else if (codigo === 3) {
    total = quantidade * 5.0;
} else if (codigo === 4) {
    total = quantidade * 2.0;
} else if (codigo === 5) {
    total = quantidade * 1.5;
}

console.log(`Total: R$ ${total.toFixed(2)}`);

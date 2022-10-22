const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valores = input.split(' ');

let [A, B, C] = valores.map(item => parseFloat(item));
let raiz1 = 0;
let raiz2 = 0;

let delta = Math.pow(B, 2) - 4 * A * C;

if (A === 0 || delta < 0) {
    console.log('Impossivel calcular')
} else {
    raiz1 = (((-B) + Math.sqrt(delta)) / (2 * A)).toFixed(5);
    raiz2 = (((-B) - Math.sqrt(delta)) / (2 * A)).toFixed(5);
    console.log(`R1 = ${raiz1}`);
    console.log(`R2 = ${raiz2}`);
}
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valorLido = parseInt(input);
let valor = valorLido;
let cedulas = [];

if (valor >= 100) {
    cedulas.push(Math.trunc(valor / 100));
    valor %= 100;
} else {
    cedulas.push(0);
}

if (valor >= 50) {
    cedulas.push(Math.trunc(valor / 50));
    valor %= 50;
} else {
    cedulas.push(0);
}

if (valor >= 20) {
    cedulas.push(Math.trunc(valor / 20));
    valor %= 20;
} else {
    cedulas.push(0);
}

if (valor >= 10) {
    cedulas.push(Math.trunc(valor / 10));
    valor %= 10;
} else {
    cedulas.push(0);
}

if (valor >= 5) {
    cedulas.push(Math.trunc(valor / 5));
    valor %= 5;
} else {
    cedulas.push(0);
}

if (valor >= 2) {
    cedulas.push(Math.trunc(valor / 2));
    valor %= 2;
} else {
    cedulas.push(0);
}

if (valor >= 1) {
    cedulas.push(Math.trunc(valor / 1));
    valor %= 1;
} else {
    cedulas.push(0);
}

console.log(`${valorLido}
${cedulas[0]} nota(s) de R$ 100,00
${cedulas[1]} nota(s) de R$ 50,00
${cedulas[2]} nota(s) de R$ 20,00
${cedulas[3]} nota(s) de R$ 10,00
${cedulas[4]} nota(s) de R$ 5,00
${cedulas[5]} nota(s) de R$ 2,00
${cedulas[6]} nota(s) de R$ 1,00`);
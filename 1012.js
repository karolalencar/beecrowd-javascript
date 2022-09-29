let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');

let [A, B, C] = lines.map(Number.parseFloat);
const pi = 3.14159;

let areaTrianguloRetangulo = ((A * C) / 2).toFixed(3);
let areaCirculo = (pi * Math.pow(C, 2)).toFixed(3);
let areaTrapezio = (((A + B) * C) / 2).toFixed(3);
let areaQuadrado = (Math.pow(B, 2)).toFixed(3);
let areaRetangulo = (A * B).toFixed(3);

console.log(`TRIANGULO: ${areaTrianguloRetangulo}
CIRCULO: ${areaCirculo}
TRAPEZIO: ${areaTrapezio}
QUADRADO: ${areaQuadrado}
RETANGULO: ${areaRetangulo}`);

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorPorHora = Number(lines.shift());

let salario = (horasTrabalhadas * valorPorHora).toFixed(2);

console.log(`NUMBER = ${numeroFuncionario}
SALARY = U$ ${salario}`);



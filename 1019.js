const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let duracao = parseInt(input);
let horas = 0;
let minutos = 0;
let segundos = 0;

if (duracao >= 3600) {
    horas = Math.trunc(duracao / 3600);
    duracao %= 3600;
}
if (duracao >= 60) {
    minutos = Math.trunc(duracao / 60);
    duracao %= 60;
}

segundos = duracao;

console.log(`${horas}:${minutos}:${segundos}`);
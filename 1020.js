const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let idadeEmDias = parseInt(input);
let anos = 0;
let meses = 0;
let dias = 0;

if (idadeEmDias >= 365) {
    anos = Math.trunc(idadeEmDias / 365);
    idadeEmDias %= 365;
}
if (idadeEmDias >= 30) {
    meses = Math.trunc(idadeEmDias / 30);
    idadeEmDias %= 30;
}

dias = idadeEmDias;

console.log(`${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`);
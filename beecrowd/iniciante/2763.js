const prompt = require("prompt-sync")();

const CPF = prompt('Digite seu CPF no formato XXX.YYY.ZZZ-DD  ');

const first = CPF.slice(0,3); 
const second = CPF.slice(4,7);
const middle = CPF.slice(8,11);
const final = CPF.slice([-2]);

console.log(`CPF COMPLETO: ${CPF}`);
console.log(`Tres primeiros digitos: ${first}`);
console.log(`Quarto dígito pra frente: ${second}`);
console.log(`Digitos do meio: ${middle}`);
console.log(`Digitos finais: ${final}`);

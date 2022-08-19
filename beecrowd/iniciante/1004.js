const prompt = require ("prompt-sync")();

const A = prompt("Primeiro Valor: ");
const B = prompt("Segundo Valor: ");

function product(){
  const X = parseInt(A) * parseInt(B);
  console.log(`${A} vezes ${B} é igual a ${X}`);
}

product();

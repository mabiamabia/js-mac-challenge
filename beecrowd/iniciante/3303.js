const prompt = require("prompt-sync")();

const word = prompt("Digite uma palavra para saber se é um palavrão:  ");
const wordSize = word.length
console.log(`${word} possui ${wordSize} letras`);

function badWordDetector(){
  if(wordSize <= 10){
    console.log(`Portanto a palavra ${word}, não é um palavrão `);
  } else {
    console.log(`${word} é um palavrão!`);
  }
}

badWordDetector();

const prompt = require("prompt-sync")();

var remember = prompt('Insire um n[umero para lembrar a senha  ');

const password = remember - 1;

console.log(`A sua senha é ${password}`);
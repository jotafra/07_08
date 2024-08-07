const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite a temperatura em graus celsius:"));

let farenheit = (celsius * 9 / 5) + 32

console.log(`${celsius} podem ser convertidos para ${farenheit}!!!`)


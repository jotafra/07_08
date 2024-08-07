const prompt = require('prompt-sync')();

let qtd = prompt("Digite a quantidade de números que deseja inserir na lista: ");

let array = []

for (let i = 0; i < qtd; i++) {
    let num = prompt(`Digite o número ${i + 1}:`);
    array.push(num);
}

console.log(array)

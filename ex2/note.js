const prompt = require('prompt-sync')();

let grape = parseFloat(prompt("Digite a nota do estudante:"));

if (grape < 4){
    console.log("Reprovado")

}else if (4 <= grape && grape < 6){
    console.log("Recuperação")

}else if (grape >= 6){
    console.log("Aprovado")
}

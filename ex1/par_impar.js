const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Digite um número:"));


if (verify(n1)){
    console.log("O número é par!!") 
    }
    else{
        console.log("O número é impar!!")
    }

function verify(num){
    if(num % 2 === 0 ){
        return true
    }
}
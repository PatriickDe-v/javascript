/*Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas depositados 
em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo e o troco
(se existir)*/

const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))

let troco 
let tempo 

if(valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
} else if (valor >= 1.75){
    tempo = 60 
    troco = valor - 1.75
} else {
    tempo = 30
    troco = valor - 1.00
}

console.log(`Tempo: ${tempo} min`)
if(troco > 0) {
    console.log(`Troco:R$ ${troco}`)
}
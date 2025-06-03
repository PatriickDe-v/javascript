/*Elaborar um programa que leia a velocidade permitida em uma estrada, e a velocidade de um condutor.
Se a velocidade for inferior ou igual á permitida, exiba "Sem multa". Se a velocidade for de até 20% maior que a permitida
exiba "Multa Leve. E se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave" */
const prompt = require("prompt-sync")()

const limite = Number(prompt("Velocidade Permitida: "))
const velocidade = Number(prompt("Velocidade do Condutor: "))

const multaLeve = velocidade * 0.20

if(velocidade <= multaLeve) {
    console.log("Multa Leve")
} else {
    console.log("Multa grave!")
}

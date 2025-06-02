/*Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. 
Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe
o número de quadriênios a que o funcionário tem direito e o salário final */

const prompt = require("prompt-sync")() //adiciona os pacotes no programa

const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))  //le os dados de entrada


const quadrienio = Math.floor(tempo / 4)    // calcula quadrienios
const acrescimo = salario * tempo / 100     // tbm os acrescimemos    
const total = salario + acrescimo

console.log(`Quadriênio: ${quadrienio}`)
console.log(`Salário final R$: ${total.toFixed(2)}`)    // exibe as respostas 
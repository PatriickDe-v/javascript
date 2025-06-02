/*Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. 
Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe
o número de quadriênios a que o funcionário tem direito e o salário final */

const prompt = require("prompt-sync")() //adiciona os pacotes no programa

const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))


const quadrienio = Math.floor(tempo / 4)
const acrescimo = salario * tempo / 100
const total = salario + acrescimo

console.log(`Quadriênio: ${quadrienio}`)
console.log(`Salário final R$: ${total.toFixed(2)}`)
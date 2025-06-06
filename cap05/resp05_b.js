/*b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano.
Elaborar um programa que leia o número inicial de chincilas e anos e informe ano a ano o número médio previsto
de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a 2 (um casal)*/

const prompt = require("prompt-sync")()


const chinchilas = Number(prompt("Nº de Chinchilas: "))
const anos = Number(prompt("Nº de anos: "))

let resp = ""
let total = chinchilas

if (chinchilas < 2) {
    console.log("Número de chinchilas deve ser maior ou igual a 2")
}

for(let i = 1; i <= anos; i++) {
    resp = resp + i + "º ano: " + total + " Chinchilas\n"
    total = total * 3
} 
console.log(resp)
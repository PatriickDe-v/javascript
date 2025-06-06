/*Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta
de acordo com o número informado. Utilize * para separar os nomes */

const prompt = require("prompt-sync")()

const fruta = prompt("Fruta: ")             //obtem os dados
const num = Number(prompt("Número: ")) 

let resultadoFinal = ""

for (i = 0; i < num; i++) {
    if (i > 0) {
        resultadoFinal += " * "
    } 

    resultadoFinal += fruta
}
console.log(resultadoFinal)
/*Eleaborar um programa de leia um número. Informe se ele é par ou ímpar. Faça com if... else...
tradicional e, após tente criar com o operador ternário. */
const prompt = require("prompt-sync")()

const numero = Number(prompt("Número: "))

/*if (numero % 2 == 0) {
    console.log("Esse número é par")
} else {
    console.log("Esse número é ímpar")
} */
const resultado = numero % 2 == 0 ? "Par" : "Impar"

console.log(resultado)
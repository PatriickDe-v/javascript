/*Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes
que um cliente deseja parcelar esse valor(em boletos ou carnês). Para facilitar o troco
o lojista deseja que as parcelas inicias não tenham centavos, ou seja, centavos apenas na última parcela
Informe como resposta cada parcela, considerando essa situação. */

const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))
const num = Number(prompt("Nº Parcelas: "))

const valorParcelas = Math.floor(valor / num) //calcula valor sem decimais
const valorFinal = valorParcelas + (valor % num) //calcula parcela final

for(let i = 1; i < num; i++) {
    console.log(`${i} parcela: R$ ${valorParcelas.toFixed(2)}`)
}

console.log(`${num}º Parcela: R$ ${valorFinal.toFixed(2)}`) //ultima parcela
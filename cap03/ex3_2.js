//Código javascript para revenda de carros 
const prompt = require("prompt-sync")() //Adiciona o pacote ao programa

const veiculo = prompt("Veículo: ")    //Lê os dados de entrada
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.50        //calcula o valor da entrada e parcela
const parcela = (preco * 0.50) / 12

console.log(`Promoção: ${veiculo}`)   //exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12 de R$${parcela.toFixed(2)}`)



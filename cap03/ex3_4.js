/* Elaborar um programa para uma veterinária, que leio o peso de uma ração em kg
e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra de ração
em gramas
*/

const prompt = require("prompt-sync")()   //adicionando pacote ao programa

const peso = Number(prompt("Peso da Ração(KG): "))      //leitura de dados
const consumo = Number(prompt("Consumo diário(GR): "))

const pesoGr = peso * 1000   //variavel auxiliar
const duracao = Math.floor(pesoGr / consumo)        //processamento de dados
const sobra = pesoGr % consumo                      //cálculo das respostas

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)
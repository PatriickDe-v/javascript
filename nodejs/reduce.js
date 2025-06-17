/*Método reduce() é util para obter valores cumulativos(ou concatenados) a partir dos dados de um array */

const amigos = [{ nome: "Ana", idade: 20 },
{ nome: "Bruno", idade: 17 },
{ nome: "Cátia", idade: 25 }]

const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0)
const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", "")

console.log(`Soma: ${soma}`)
console.log(`Todos: ${todos}`)


/*Além de totais, outros valores podem ser obtidos a partir do método reduce(), já que ele percorre os elementos
 de um vetor, como se tivéssemos usando um laço 'for'. */
 const numeros = [10, 13, 20, 8, 15]
 const maior = numeros.reduce((a, b) => Math.max(a, b), 0)
 console.log(`Maior: ${maior}`)   //Maior: 20
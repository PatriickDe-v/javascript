/*Elaborar um programa que simule saques em um caixa eletrônico de um banco. Ler o valor solicitado por clientes
até ser digitado 0. Sabendo que o caixa apenas disponibiliza apenas notas de 10, exiba após cada leitura se o saque
é valido ou inválido. Ao final, listar os saques válidos e a soma dos saques. Exiba também o número de saques inválidos*/

const prompt = require("prompt-sync")()

console.log("Informe o valor para sacar ou 0 para sair")

const saques = []               //declarar vetor global

do {
    const valor = Number(prompt("Saque R$: "))
    if (valor == 0) {
        break
    }
    saques.push(valor)
    if (valor % 10 == 0) {
        console.log("Saque realizado com sucesso!")
    } else {
        console.log("Erro... valor inválido (valor tem que ser multiplo de 10)")
    }
} while (true) {
    console.log('\nSaques Válidos')
    console.log('-'.repeat(35))

    const saquesValidos = saques.filter(saques => saques % 10 == 0) 
    for(const saques of saquesValidos) {
        console.log(`R$: ${saques.toFixed(2)}`)
    }
    console.log('-'.repeat(35))
    
    const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
    console.log(`Total dos Saques R$: ${totalSacado.toFixed(2)}`)

    const saquesInvalidos = saques.length - saquesValidos.length
    console.log(`\nNº de tentativas de Saques (saques inválidos): ${saquesInvalidos}`)
}
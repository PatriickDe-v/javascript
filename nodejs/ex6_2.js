/*Elaborar um programa que leia o nome e idade de 'n' clientes de um banco (até ser digitado 'fim' no nome).
Após, classifique os clientes em 2 grupos, preferencial(a partir dos 60 anos) e File Normal(Até 59) anos. 
Informe a ordem de atendimento em cada grupo de acordo com a chegada de clientes*/

prompt = require("prompt-sync")()

const clientes = []

console.log("Organize os clientes em ordem de chegada ou 'Fim para sair.")

do {
    const nome = prompt("Nome: ")       //recebe os dados de nome
    if (nome == 'Fim') {                 //verifica 
        break
    }
    const idade = Number(prompt("Idade: "))     //recebe os dados de idade
    clientes.push({ nome, idade })                //adiciona no vetor clientes

    console.log("Ok, cliente adicionado na fila!")

} while (true) {
    console.log('Fila preferencial\n')
    console.log('-'.repeat(40))

    filaPref = clientes.filter(cliente => cliente.idade >= 60)
    filaPref.forEach((fila, i) => {
        console.log(`${i + 1}. ${fila.nome}`)
    })

    console.log("\nFila Normal")
    console.log("-".repeat(40))

    const filaNormal = clientes.filter(clientes => clientes.idade < 60)
    filaNormal.forEach((fila, i) => {
        console.log(`${i + 1}. ${fila.nome}`)
    })

}
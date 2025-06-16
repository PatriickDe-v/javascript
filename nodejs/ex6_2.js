/*Elaborar um programa que leia o nome e idade de 'n' clientes de um banco (até ser digitado 'fim' no nome).
Após, classifique os clientes em 2 grupos, preferencial(a partir dos 60 anos) e File Normal(Até 59) anos. 
Informe a ordem de atendimento em cada grupo de acordo com a chegada de clientes*/

prompt = require("prompt-sync")()

const clientes = []

console.log("Organize os clientes em ordem de cegada ou 'Fim para sair.")

do {
    const nome = prompt("Nome: ")           //recebe o nome

    if (nome == 'Fim') {                    //verifica 
        break
    }

    const idade = Number(prompt("Idade: "))   //recebe a idade
    clientes.push({ nome, idade })            //adiciona no vetor clientes nome e idade
    console.log("Ok! Cliente cadastrado...")
} while (true) {
    console.log("-".repeat(40))

    const maioresIdades = idade.reduce((a, b) => Math.max(a, b.idade), 0)

    if(idade >= 60) {
        const preferencial = clientes.filter(cliente => cliente.idade == maioresIdades)
        
    }
}
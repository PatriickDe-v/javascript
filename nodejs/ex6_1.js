const prompt = require("prompt-sync")()

console.log("Informe os alunos. Após digite 'Fim' no nome para siar")

const alunos = [] 

do {
    const nome = prompt("Nome: ")
    if (nome == "Fim") {
        break
    }
    
    const nota = Number(prompt("Nota: "))
    alunos.push({nome, nota})
    console.log("Ok! Aluno cadastrado...")
} while(true) {
    console.log("\nFila Preferencial")
    console.log("-".repeat(40))
    
    const filaPref = clientes.filter(cliente => cliente.idade >= 60)
    filaPref.forEach((fila, i) => {
        console.log(`${i + 1}. ${fila.nome}`)
    })

    console.log("\nFila Normal")
    console.log("-".repeat(40))
    const filaNormal = clientes.filter(cliente => cliente.idade < 60)
    filaNormal.forEach((fila, i) => {
        console.log(`${i + 1}. ${fila.nome}`)
    })

}
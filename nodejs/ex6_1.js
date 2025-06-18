/*Elaborar um programa que leia o nome e a nota de 'n' alunos até o usuário digitar
'Fim' no nome. Após verifique e exiba a maior nota da turma. Se a maior nota da turma for
superior ou igual a 7, exiba os alunos que a obtiveram. Caso contrário, exiba a mensagem
'Não há alunos em destaque na turma. */

const prompt = require("prompt-sync")()

const alunos = []               //vetor global

do {
    const nome = prompt("Nome: ")           //recebe os dados
    if (nome == 'Fim') {                    //verifica antes de contiuar o programa
        break
    }

    const nota = Number(prompt("Nota: "))   //recebe a nota do aluno 
    alunos.push({ nome, nota })               //adiciona no vetor alunos
    console.log('Aluno cadastrado com sucesso!')
} while (true) {
    console.log('-'.repeat(40))
    const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)   //obtém a maior nota
    console.log(`Maior nota: ${maior}`)

    if( maior >= 7) {
        const destaques = alunos.filter(aluno => aluno.nota == maior) //filtro

        for(const destaque of destaques) {
            console.log(`- ${destaque.nome}`)            //mostra os nomes procedidos por -
        }
    } else {
        console.log("Não há alunos em destaque na turma")
    }
}
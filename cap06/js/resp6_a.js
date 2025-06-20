/*a) Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato.
 O programa deve conter três funções [a serem executadas no evento click do botao]
  para 
  1: [validar o preenchimento, adicionar um clube ao vetor e listar os clubes. 
  2: listar os clubes [se houver] 
  3: montar a tabela de jogos, no formato primeiro x último, segundo x penultimo e assim por diante. 
  Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar. */

const frm = document.querySelector("form")
const resp = document.querySelector("pre") 


const clubes = []                   //array global que será usado nas 3 funções

//evento para listar e verificar se há clubes no input
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inClube.value
    clubes.push(nome)
    frm.reset()
    console.log(clubes)

    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(clubes.length == 0) {
        alert("Não há clubes registrados!")
        return
    }
    //lista para concatenar os clubes
    lista = ""

    for (const clube of clubes) {
        lista += `${clube}\n`
    }
    resp.innerText = lista
})

frm.btConfronto.addEventListener("click", () => {

    const tam = clubes.length
    
    if(tam == 0) {
        alert("Não há clubes cadastrados para montar a tabela")
    } else if (tam % 2 == 1) {
        alert("Número de clubes deve ser par!")
    }

    //string para concatenar os jogos
    let jogos = ""
 
    const ultimo = tam - 1

    for(i = 0; i < tam / 2; i++) {
        jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n"
    }

    resp.innerText = jogos
})
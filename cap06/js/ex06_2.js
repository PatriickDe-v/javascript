const frm = document.querySelector("form")                          //obtem os elementos da página
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDicas = document.querySelector("#outDica")



const erros = []            //vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1                //numero aleatório entre 1 e 100
const CHANCES = 6                                                   //constante com número máximo de chances

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)   //obtem o número digitado
    //se acertou                     
    if (numero == sorteado) {
        respDicas.innerText = `Parabén!! Número sorteado: ${sorteado}`
        frm.btSubmit.disable = true         //troca status dos botões
        frm.btNovo.className = "exibe"
    } else {
        //se o número existe no vetor erros (já apostou esse número)
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            //adiciona o número ao vetor erro
            erros.push(numero)
            const numErros = erros.length       //obtem o tamanho do vetor
            const numChances = CHANCES - numErros    //calcula nº de chances
            //Exibe o Nº de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disable = true
                frm.btNovo.className = "exibe"
                respDicas.innerText = `Game Over! Número sorteado: ${sorteado}`
            } else {
                //usa operador ternário para mensagem de dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDicas.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""                 //limpa o campo de entrada
    frm.inNumero.focus()                    //posiciona o cursor neste campo
})

frm.btNovo.addEventListener("click", () => {
    location.reload()               //recarrega a página
})
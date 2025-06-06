//Cria referencia ao form e elementos de resposta do programa
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

    const nome = frm.inNome.value //obtém os valores

    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2 //calcula a média das notas

    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    //cria as condições
    if (media >= 7) {
        //altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    } else if(media >= 4) {
        resp2.innerText = `Atenção ${nome}. Você está em recuperação`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
    e.preventDefault() //evita o envio do form
})
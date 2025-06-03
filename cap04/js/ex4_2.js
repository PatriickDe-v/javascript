//Cria referencia ao form e elemento onde será exibida a resposta 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()              //evita o envio do form

    const nome = frm.inNome.value           //Obtém os dados 
    const masculino = frm.inMasculino.value             //entrada de dados
    const altura = Number(frm.inAltura.value)

    //declara a variável peso
    //se masculino (ou, if masculino == true)
    //Math.pow eleva ao quadrado
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
    //Processamento dos dados    


    frm.addEventListener("reset", () => {
        resp.innerText = "" //limpa o conteudo exibido no h3 
    })
    //Apresenta a resposta (altera o conteúdo ao h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`

})
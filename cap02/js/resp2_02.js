//Cria referencia ao form e o elemento h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")               //entrada dos dados

//Cria um 'ouvinte' de evento, que é acionado quando o botão for clicado 
frm.addEventListener("submit", (e) => {
    const vMinuto = Number(frm.inMin.value)            //processamento de dados
    const tempo = Number(frm.inTempo.value)

    const totPagar = Math.ceil(tempo/ 15)
    const total = totPagar * vMinuto

    resp.innerText = `Valor a Pagar: ${total.toFixed(2)}`

    e.preventDefault()
})
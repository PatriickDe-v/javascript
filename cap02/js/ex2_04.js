//Cria referencia ao form e ao elemento h3(onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um 'ouvinte' de evento, que será acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) //obtem os dados dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` //exibe a resposta
    
    e.preventDefault()   //evita que o form seja enviado
})
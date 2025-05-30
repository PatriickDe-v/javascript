//Cria uma referencia ao form e aos elementos h3 e h4 que serao as respostas
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um 'ouvinte' de evento, acionado com o botão é clicado
frm.addEventListener("submit", (e) => {
    const remedio = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)

    const promo = Math.floor(preco) * 2
    resp1.innerText = `Promoçã de ${remedio}`
    resp2.innerText = `Leve 2 por apenas ${promo.toFixed(2)}`
    e.preventDefault()
}) 
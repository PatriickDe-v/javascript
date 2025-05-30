//Cria referencia ao form e o elemento h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")              //entrada de dados
const resp2 = document.querySelector("h4")

//Cria um 'ouvinte' de evento, para ser acionado quando o botão for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const totPromo = (preco * 3) - 3 
    const produto1 = (preco / 2)

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$:${totPromo.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas ${produto1.toFixed(2)}`

    e.preventDefault()
})

const frm = document.querySelector("form")
const resp = document.querySelector("h3")   //obtem os elementos da página

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const numero = Number(frm.inNumero.value)
    let resposta = `Entre ${numero} e 1: `

    for (let i = numero; i > 1; i = i - 1) {
        resposta = resposta + i + ", "         //resposta acomula números e vírgulas
    } 
    resp.innerText = resposta + "1."
})
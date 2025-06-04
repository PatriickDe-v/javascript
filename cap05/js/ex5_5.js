const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""  //string com a resposta a ser exibida 
let numContas = 0   //inicializa contator...
let valTotal = 0    //e acumulador (váriaveis globais)

frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evite o envio do form

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)         //obtem os dados

    numContas++ //adiciona valores ao contador e acomulador
    valTotal = valTotal + valor  //ou valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}----------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""  //limpa os campos
    frm.inValor.value = ""
    frm.inDescricao.focus()         //posiciona no campo inDescricao do form
})
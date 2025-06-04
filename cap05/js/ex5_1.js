const frm = document.querySelector("form")   //obtem os elementos das páginas
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)    //obtém o número informado
    let resposta = ""                           //Variavel do tipo string para concatenar a resposta
    //Cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        //variavel resposta vai acomulando os novos conteúdos
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})
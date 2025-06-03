/*Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata
(quadrados perfeitos), informa-las, caso contrário, informe: 'Não há raiz exata para... */

//Cria referencia ao form e o h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//'Ouvinte' de evento que será acionado quando o botão for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)

    if(Number.isInteger(raiz)) {
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }
})
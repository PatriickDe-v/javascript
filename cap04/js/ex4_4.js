/*Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão da França) 
elaborar um programa que leia a hora no Brasil e informe a hora na França.*/

//Cria uma referencia ao formulario e o h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Adiciona um 'ouvinte' de evento, que é acionado quando o botão é clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //obtém e converte os valores obtem nos campos do formulário
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5     //calcula horário na França
    if (horaFranca > 24) {               //Se passar das 24 horas na França
        horaFranca = horaFranca - 24    //subtrai por 24
    }
    //exibe a resposta na tela
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})
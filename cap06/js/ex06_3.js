const frm = document.querySelector("form")  //obtém os elementos da página
const resp = document.querySelector("pre")
const carros = []                           //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()              //evite o envio do form

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)   //obtém os dados do form

    carros.push({ modelo, preco })            //adiciona dados ao vetor de objetos
    frm.inModelo.value = ""                 //limpa os campos do form
    frm.inPreco.value = ""
    inModelo.focus()
    //dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("Clicar"))
})

frm.btListar.addEventListener("click", () => {          //'escuta' clique em btListar
    if (carros.length == 0) {                            //se o tamanho do vetor é igual a 0
        alert("Não há carros na lista")
        return
    }
    //metodo reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista de Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que cliente deseja pagar?"))

    if (maximo == 0 || isNaN(maximo)) {      //se não informou ou valor inválido
        return                              //...retorna
    }
    //cria um novo vetor com os objetos que atendem a condição do filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) {         //se o tamanho do vetor filtro é 0
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const carro of carrosFilter) {                         //percore cada elemento do array
        lista += `${carro.modelo} - R$: ${maximo.toFixed(2)}\n`
    }
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual percentual de desconto: "))
    if (desconto == 0 || isNaN(desconto)) {                      //se não informou ou valor inválido
        return                                                  //retorna 
    }

    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ""
    for (const carro of carrosDesc) {                       //percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})
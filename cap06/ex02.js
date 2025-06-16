const carros = []

const modelo = "Fiesta"
const preco = 46800

for(const carro of carros) {
    const {modelo, preco} = carro
    console.log(`${modelo} - R$: ${preco}`)
}
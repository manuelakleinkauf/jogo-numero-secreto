const maiorValor = 1000
const menorValor = 1
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor+1)
}

const elementoMenorValor = document.getElementById('menor_valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior_valor')
elementoMaiorValor.innerHTML = maiorValor



function verificaValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        console.log('Não é um número')
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        console.log(`Valor inválido! O número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero){
   return numero > maiorValor || numero < menorValor
}
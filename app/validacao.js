function verificaValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `
            <h5>Valor inválido! Não é um número</h5>
        `
        return
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `
            <h5>Valor inválido! O número secreto precisa estar entre ${menorValor} e ${maiorValor}</h5>
        `
        return
    }

 
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!!</h1>
            <p>O número secreto era ${numeroSecreto}</p>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</buton>
        `
    }else if(numero>numeroSecreto){
        elementoChute.innerHTML += `
        <h4>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></h4>
        `
    }else{
        elementoChute.innerHTML += `
        <h4>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></h4>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero){
   return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload()
    }
})


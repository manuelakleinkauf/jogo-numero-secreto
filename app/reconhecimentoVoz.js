const elementoChute = document.querySelector('#chute')

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaValorValido(chute)
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <h4>Você disse: </h4>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

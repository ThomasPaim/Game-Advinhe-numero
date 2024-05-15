let listaDeNumerosSorteados = []
let numeroLimete = 10
let numeroSecreto = gerarNumAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto   
   responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate: 1.2})
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value 

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa0}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }

        tentativas++
        limparCampo()
    }

}

function gerarNumAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimete + 1)
    let quantidadeDeElementosNaLista  =listaDeNumerosSorteados.length
    
    if(quantidadeDeElementosNaLista == numeroLimete){
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

let numeroSecreto = 2;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p','Escolha um número entre 1 e 10');

function exibirImagem(id) {
    document.getElementById('imagemFeliz').style.display = 'none';
    document.getElementById('gifAcertou').style.display = 'none';
    document.getElementById('gifErrou').style.display = 'none';

    if (id === 'imagemFeliz') {
        document.getElementById('imagemFeliz').style.display = 'block';
    }

    document.getElementById(id).style.display = 'block';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', 'Parabéns, você acertou o número secreto');
        exibirImagem('gifAcertou');
        desabilitarInputEBotao();
    } else {
        if(chute < numeroSecreto){
           exibirTexto('p','O número é menor que o número secreto');
        } else {
            exibirTexto('p','O número é maior que o número secreto');
        }
        exibirTexto('h1', 'Você errou :(');
        exibirImagem('gifErrou');
    }
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    numeroSecreto = 2;
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    document.querySelector('input').value = '';
    habilitarInputEBotao();
    ocultarTodasAsImagens();
}

function ocultarTodasAsImagens() {
    document.getElementById('gifAcertou').style.display = 'none';
    document.getElementById('gifErrou').style.display = 'none';
}


function desabilitarInputEBotao() {
    document.querySelector('input').disabled = true;
    document.getElementById('reiniciar').disabled = false;
}

function habilitarInputEBotao() {
    document.querySelector('input').disabled = false;
    document.getElementById('reiniciar').disabled = true;
}

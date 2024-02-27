let listaDeNumero = [];
let numeroDisponiveis = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 10');
    
}
    mensagemInicial();


function exibirImagem(id) {
    document.getElementById('vamosComecar').style.display = 'none';
    document.getElementById('gifAcertou').style.display = 'none';
    document.getElementById('gifErrou').style.display = 'none';

    if (id === 'vamosComecar') {
        document.getElementById('vamosComecar').style.display = 'block';
    }

    document.getElementById(id).style.display = 'block';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Voce acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        exibirImagem('gifAcertou');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute < numeroSecreto){
           exibirTexto('p','O número é menor que o número secreto');
        } else {
            exibirTexto('p','O número é maior que o número secreto');
        }
            exibirTexto('h1', 'Você errou :(');
            exibirImagem('gifErrou');
            tentativas++;
            limparCampo();
    }       
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroDisponiveis + 1);
    let quantidadeElementosLista = listaDeNumero.length;

    if(quantidadeElementosLista == numeroDisponiveis){
        listaDeNumero = [];
    }
    if(listaDeNumero.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaDeNumero.push(numeroEscolhido)
        return numeroEscolhido;
    }

}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.querySelector('input').value = '';
    habilitarInputEBotao();
    ocultarTodasAsImagens();
    document.getElementById('vamosComecar').style.display = 'none';

}

function ocultarTodasAsImagens() {
    document.getElementById('vamosComecar').style.display = 'none';
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


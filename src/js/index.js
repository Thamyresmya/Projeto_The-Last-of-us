// - Passo 1 - Pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//- Passo 2 - Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {   

        desativarBotaoSelecionado();        
    
        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
    
        mostrarImagemDeFundo(indice);

    })
});


//- Passo 3 - Desmarcar o botão selecionado anterior  
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

//- Passo 4 - Marcar o botão clicado como se estivesse selecionada
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

//- Passo 5 - Esconder a imagem anterior
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

//- Passo 6 - Fazer aparecer a imagem correspondente ao botão clicado
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
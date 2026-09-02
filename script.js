// =============================================
// SELECIONA TODOS OS BOTÕES DA PÁGINA
// =============================================
const botoes = document.querySelectorAll("button");

// =============================================
// PARA CADA BOTÃO, ADICIONA UM "OUVINTE" DE CLIQUE
// =============================================
botoes.forEach(function(botao) {
    let curtiu = false; // Controla se aquele botão específico já foi curtido

    botao.addEventListener("click", function() {
        // Encontra o <span> dentro do botão clicado
        let contador = botao.querySelector("span");
        
        // =============================================
        // LÓGICA DE CURTIR / DESCURTIR
        // (limite de 1 like por clique)
        // =============================================
        if (curtiu === false) {
            contador.textContent++; // Aumenta o número
            curtiu = true;          // Marca como curtido
        } else {
            contador.textContent--; // Diminui o número (descurtir)
            curtiu = false;         // Volta a estar disponível para curtir
        }
    });
});
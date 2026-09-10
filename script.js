// =============================================
// 1. BOTÕES DE REAÇÃO (CURTIR/DESCURTIR)
// =============================================

const botoes = document.querySelectorAll(".botoes-reacao button");

botoes.forEach(function(botao) {
    let curtiu = false;

    botao.addEventListener("click", function() {
        let contador = botao.querySelector("span");
        
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
        } else {
            contador.textContent--;
            curtiu = false;
        }
    });
});

// =============================================
// 2. MODO ESCURO (ALTERNÂNCIA DE TEMA)
// =============================================

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
        btnTemaEscuro.textContent = "🌙"; // Volta para lua (modo claro)
    } else {
        corpoPagina.classList.add("tema-escuro");
        btnTemaEscuro.textContent = "☀️"; // Vira sol (modo escuro)
    }
}

// =============================================
// 3. BOTÃO VOLTAR AO TOPO
// =============================================

const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

btnVoltarTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
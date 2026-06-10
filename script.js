// Garante que o código só rode após o HTML estar totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // FUNÇÃO 1: MENU HAMBÚRGUER (MOBILE)
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll("#navMenu a");

    // Abre e fecha o menu ao clicar no botão de três listras
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fecha o menu automaticamente quando o usuário clica em algum link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });


    // ==========================================
    // FUNÇÃO 2: GERADOR DE INSIGHTS DO AGRINHO
    // ==========================================
    const btnMensagem = document.getElementById("btnMensagem");
    const mensagemContainer = document.getElementById("mensagemContainer");

    // Lista de frases que serão sorteadas
    const insightsAgrinho = [
        "🌱 'A educação transforma o campo e cultiva o nosso amanhã!'",
        "🚀 'Drones e IA: a nova geração colhendo dados e preservando o futuro.'",
        "💧 'Sustentabilidade não é tendência, é a nossa única opção para 2026.'",
        "🚜 'Inovar no campo é produzir mais alimentos respeitando a natureza.'",
        "🧠 'O conhecimento é a semente mais fértil que podemos plantar.'"
    ];

    btnMensagem.addEventListener("click", () => {
        // Sorteia um índice aleatório com base no tamanho do array de frases
        const indiceAleatorio = Math.floor(Math.random() * insightsAgrinho.length);
        const fraseEscolhida = insightsAgrinho[indiceAleatorio];

        // Aplica um efeito suave de transição (fade-in)
        mensagemContainer.style.opacity = 0;
        
        setTimeout(() => {
            mensagemContainer.textContent = fraseEscolhida;
            mensagemContainer.style.transition = "opacity 0.4s ease";
            mensagemContainer.style.opacity = 1;
        }, 150);
    });

});

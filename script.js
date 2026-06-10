// Aguarda o navegador carregar todo o HTML antes de executar
document.addEventListener("DOMContentLoaded", () => {
   
    // Seleciona o formulário pela classe
    const formulario = document.querySelector(".formulario");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // Impede o comportamento padrão de recarregar a página
            evento.preventDefault();

            // Pega o nome digitado pelo usuário
            const nome = formulario.querySelector("input[type='text']").value;

            // Exibe um alerta de sucesso personalizado
            alert(`Parabéns, ${nome}! Sua inscrição para o Agrinho 2026 foi enviada com sucesso! 🌱`);

            // Limpa os campos do formulário
            formulario.reset();
        });
    }
});

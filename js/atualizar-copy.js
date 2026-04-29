document.addEventListener("DOMContentLoaded", () => {
    const footerText = document.querySelector("footer p");
    const anoAtual = new Date().getFullYear();

    footerText.innerHTML = `&copy; 2024-${anoAtual} Blog Exemplo. Todos os direitos reservados.`;
});
document.addEventListener('DOMContentLoaded', function() {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemOutput = document.getElementById('mensagemOutput');

    mensagemBtn.addEventListener('click', function() {
        const mensagem = "Bem-vindo";
        mensagemOutput.textContent = mensagem;
        mensagemOutput.classList.add('visible');
    });
});

// Captura o formulário
const formulario = document.getElementById("formContato");


// Evento de envio
formulario.addEventListener("submit", function(event) {


    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica formato do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um email válido.");
        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    formulario.reset();
});



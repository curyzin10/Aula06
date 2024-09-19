// Simples função para exibir uma mensagem de sucesso ao enviar o formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset(); // Limpa o formulário após o envio
});
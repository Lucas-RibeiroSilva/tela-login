document.addEventListener('DOMContentLoaded', () => {
    const login = document.getElementById('login-form');
    const mensagem = document.getElementById('mensagem');

    login.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if(email && senha.length >= 6){
            mostrarMensagem("Login realizado com sucesso!", "green");
            console.log("Dados enviados:", {email,senha});
        }else{
            mostrarMensagem("A senha precisa ter mais de 6 digitos!","red");   
        }
    });

    function mostrarMensagem(text,color){
        mensagem.textContent = text;
        mensagem.style.color =  color === "red" ? "var(--error)" : "#10b981";
    }
})
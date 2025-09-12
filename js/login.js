let btn = document.querySelector('.fa-eye');
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');
    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})

function entrar() {
    let usuario = document.querySelector(`#usuario`);
    let usuarioLabel = document.querySelector(`#usuarioLabel`);

    let senha = document.querySelector(`#senha`);
    let senhaLabel = document.querySelector(`#senhaLabel`);

    let mensagemErro = document.querySelector(`#mensagemErro`);
    let listaUsuarios = [];

    let userValide = {
        nome: ``,
        usuario: ``,
        senha: ``
    }
    listaUsuarios = JSON.parse(localStorage.getItem(`listaUsuarios`));

    listaUsuarios.forEach((item) => {  //forEach ele serve para producurar o esta 
        if (usuario.value === item.usuarioCadastrado && senha.value === item.senhaCadastrado) {// sendo digitado na lista de usuarios e ele quem vai ler se confere por isso é usado com if 
            userValide = {
                nome: item.nomeCadastrado,
                usuario: item.usuarioCadastrado,
                senha: item.senhaCadastrado
            }
        }

    });

    if (usuario.value === userValide.usuario && senha.value === userValide.senha) {
        window.location.href = "lista.html"

    } else {
        usuarioLabel.setAttribute("style", "color:red")
        usuario.setAttribute("style", "border-color:red")
        senhaLabel.setAttribute("style", "color:red")
        senha.setAttribute("style", "border-color:red")
        mensagemErro.setAttribute("style", "display:block")
        mensagemErro.innerHTML = "Usuário ou senha incorretos"
        return;
    }

    if (userValide.usuario === "" && userValide.senha === "") { //criado mais if pq quando clicava em entrar ele ia para pagina index 
        window.location.href = "login.html"
    }




}
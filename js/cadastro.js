let btn = document.querySelector('#verSenha');
let btnConfirme = document.querySelector('#verConfirmSenha');


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false;

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false;

let mensagemErro = document.querySelector('#mensagemErro')
let mensagemSucesso = document.querySelector('#mensagemSucesso')


nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minímo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true;
    }
})
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minímo 3 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true;
    }
})
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minímo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true;
    }
})
confirmarSenha.addEventListener('keyup', () => {
    if (senha.value !== confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmarSenha.setAttribute('style', 'border-color: red')
        validConfirmarSenha = false;

    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = 'Confirmar Senha'
        confirmarSenha.setAttribute('style', 'border-color: green')
        validConfirmarSenha = true;
    }
})

function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirmarSenha) {
        //o json pega o que esta na pagina do navegador na localstorage pegando a 
        // lista de usuarios ou cria uma lista vazia
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')
        listaUsuarios.push({
            nomeCadastrado: nome.value,
            usuarioCadastrado: usuario.value,
            senhaCadastrado: senha.value

        })
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios))

        mensagemSucesso.setAttribute('style', 'display:block')
        mensagemSucesso.innerHTML = '<strong>Cadastrando usuário... 🐇 </strong>'
        mensagemErro.setAttribute('style', 'display:none')
        mensagemErro.innerHTML = ''

        setTimeout(()=>{ //cria uma espera para ir para outra pagina e no final incluimos o segundos que queremos
            window.location.href = 'login.html' //muda para a pagina que queremos igual no html usando o a href
        },3000)
        

    } else {
        mensagemErro.setAttribute('style', 'display:block')
        mensagemErro.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar.</strong>'
        mensagemSucesso.innerHTML = ''
        mensagemSucesso.setAttribute('style', 'display:none')
    }

}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
btnConfirme.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmarSenha')
    if (inputConfirmSenha.getAttribute('type') === 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

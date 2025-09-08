const usuarios = [
    {
        login: `leidi`,
        pass: `leidi`
    },
    {
        login: `admin`,
        pass: `admin`
    },
    {
        login: `root`,
        pass: `12345`
    }
]
let botao= document.getElementById(`btnLogar`)
botao.addEventListener(`click`,
    function logar() {
    let pegarEmail = document.getElementById("email").value;
    let pegarSenha = document.getElementById("senha").value;
    let validar = false

   for(let i in usuarios) {
        if(pegarEmail === usuarios[i].login && pegarSenha === usuarios[i].pass){
            validar = true
            break
    }
}
    if (validar === true){
     location.href = 'lista.html'
    }else{
        alert(`Email e senha incorretos`)
    }
    
}

)



//for(let i in usuarios)
// //for (i = 0; i < usuarios.length; i = i + 1)
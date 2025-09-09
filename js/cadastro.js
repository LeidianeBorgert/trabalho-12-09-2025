let btn=document.querySelector('#verSenha');
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type')==='password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})

let btnConfirme =document.querySelector('#verConfirmSenha');
btnConfirme.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmarSenha')
    if(inputConfirmSenha.getAttribute('type')==='password'){
        inputConfirmSenha.setAttribute('type','text')
    }else{
        inputConfirmSenha.setAttribute('type','password')
    }
})
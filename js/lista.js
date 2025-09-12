let body = document.getElementsByTagName("body")[0];
let ul = document.createElement("ul");
ul.id = "lista-produtos";




function criarTitulo() {
    let h1 = document.createElement("h1");
    h1.innerText = "Bunny To-do 🐇";
    h1.classList.add("titulo");

    body.appendChild(h1);
}

function listaTodo() {


    let input = document.createElement("input"); 
    input.id = "campo-nome"; 
    input.setAttribute("type", "text"); 
    input.placeholder = "O que você vai fazer?";
    input.addEventListener("keyup", processarEventoTecla);

    let label = document.createElement("label"); 
    label.setAttribute("for", "campo-nome"); 
    label.innerText = "Adicione sua tarefa: 📝";

    body.appendChild(label);
    body.appendChild(input);
}

function botaoCadastrar() {
  
    let botao = document.createElement("button");
    botao.setAttribute("type", "submit");
   botao.innerText = "Cadastrar ✔️";
   
    botao.addEventListener("click", cadastrar);

    body.appendChild(botao);
}

function criarLista() {
    body.appendChild(ul);
}

function cadastrar() {
    let input = document.getElementById("campo-nome");
    let nome = input.value;
    criarItemNaUl(nome);


    input.value = "";
    input.focus();
}

function criarUl(nomeProduto) {

    let li = document.createElement("li");
    li.innerText = nomeProduto;
    ul.appendChild(li);
}

function processarEventoTecla(evento) {
    if (evento.key === "Enter") {
        cadastrar();
    }
}

function botaoLimparLista() {
    let botaoLimparLista = document.createElement("button");
    botaoLimparLista.setAttribute("type", "submit");
    botaoLimparLista.innerText = "Limpar Lista ❌";
    botaoLimparLista.addEventListener("click", limparLista);
    body.appendChild(botaoLimparLista);
}

function limparLista() {
    ul.innerHTML = "";
}

criarTitulo()
listaTodo();
botaoCadastrar();
criarLista();
botaoLimparLista();
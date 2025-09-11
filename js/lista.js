//eventos
let todoForm = document.querySelector(`#todo-form`);
let todoInput = document.querySelector(`#todo-input`);
let todoList = document.querySelector(`#todo-list`);


let saveTodo = (text) => {
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    let doneBtn = document.createElement("buttom")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn);

    let deleteBtn = document.createElement("buttom")
    deleteBtn.classList.add("finish-todo")
    deleteBtn.innerHTML = ` <i class="fa-solid fa-trash"></i>`
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();



}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener(`click`, (e) => {
    let targetEl = e.target;
    let parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

})
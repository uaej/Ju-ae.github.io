const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");
let todoArray = [];
const TODOKEY = "todo";


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todoArray = todoArray.filter((todo)=> parseInt(li.id)  !== todo.id);
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOKEY, JSON.stringify(todoArray));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span= document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.className = "button-81";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); 
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj={
        text : newTodo,
        id : Date.now()
    };
    console.log(todoInput.value, newTodo);
    todoInput.value = "";
    todoArray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOKEY);
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todoArray = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
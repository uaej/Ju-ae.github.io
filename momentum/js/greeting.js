const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_NAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato){
    tomato.preventDefault(); //이벤트의 기본 행동이 발생되지 않도록 막는 function이다. 
    //form을 submit하면 기본적으로 browser를 새로고침하게 되어있는데, 이를 막는 역할을 해 준다. 
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_NAME);
    paintGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_NAME);
}

const localName = localStorage.getItem(USERNAME_KEY);
if(localName === null){
    loginForm.classList.remove(HIDDEN_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(localName);
}

const form = document.querySelector(".js-form");
var input = document.querySelector("input");
const greetings = document.querySelector(".js-greetings");
const username = document.querySelector(".js-username");


const USER_LS = "currentUser"

var firstVisit = true


function saveName(name){
    localStorage.setItem(USER_LS, name);
 
}


function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.addEventListener("submit", handleSubmit);
}

function greetingsTime(text){
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();

    if (hours >= 21 || hours <= 5){
        greetings.innerText = "Good night, ";
    }
    else if (hours >= 17){
        greetings.innerText = "Good evening, ";
    }
    else if (hours >= 12){
        greetings.innerText = "Good afternoon, ";
    }
    else{
        greetings.innerText = "Good morning, ";
    }
}

function paintGreetings(text){
    form.classList.add("hide");
    if (firstVisit === true){
        greetings.innerText = "Hello ";
    }
    else{
        greetingsTime(text); 
    }
    greetings.style.animation = "fadeIn 2s";
    username.style.animation = "fadeIn 2s";
    username.innerText = text;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }
    else{
        firstVisit = false
        paintGreetings(currentUser);
    }

}

const currentName = localStorage.getItem(USER_LS);

function editName(event){
    if (event.keyCode === 13){
        event.preventDefault();
        const newName = username.innerText;
        if (newName === ''){
            username.innerText = currentName;
        }
        else{
            saveName(newName);
        }
        username.blur();
    }
}



function init(){
    loadName();
    username.addEventListener("keydown", editName)
}
init();

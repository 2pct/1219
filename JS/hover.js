// photo credits 
const hideClock = document.querySelector(".js-clock");
const hideForm = document.querySelector(".js-form");
const hideGreetings = document.querySelector(".js-greetings");
const hideName = document.querySelector(".username");
const hideQuestion = document.querySelector("#askTodos");
const hideTodoForm = document.querySelector(".js-todoForm");
const hideTodoList = document.querySelector(".js-todoList");
const photoSource = document.querySelector("#photoCredit");
const list = [hideClock, hideGreetings, hideName, hideQuestion, hideForm, hideTodoForm, hideTodoList];

let isTodoHided = null;


function isHided(element){
    return element.classList.contains("hide");
}

function handleMouseEnter(){
    isTodoHided = isHided(hideTodoList)

    for (h of list){
        if (isHided(h) === false){
            h.classList.add("hide")
        }
    }


}

function handleMouseLeave(){
    for (h of list){
        h.classList.remove("hide");
        if (localStorage.getItem(USER_LS) !== null){
            hideForm.classList.add("hide");
        }

        if (isTodoHided === true){
            hideTodoList.classList.add("hide");
        }
    }
    
    

}





function init(){
    photoSource.addEventListener("mouseenter", handleMouseEnter);
    photoSource.addEventListener("mouseleave", handleMouseLeave);
}

init();

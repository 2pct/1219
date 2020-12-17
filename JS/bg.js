const body = document.querySelector("body");
const todo = document.querySelector(".todoForm");
var input = document.querySelectorAll("input");
const href = document.querySelector("#photoCredit");

const imgCount = 6;


const bgOrders = [...Array(imgCount).keys()];


function genRandom(){
    const random = Math.floor(Math.random()*10% imgCount);
    return random
}



function paintBg(number){

    const image = new Image();
    image.src = `images/${number}.jpg`;
    image.classList.add("bg");
    body.append(image);
    
}

const names = {
    0: ["Kevin Lanceplaine", "https://unsplash.com/@lanceplaine"],
    1: ["Silas Baisch", "https://unsplash.com/@silasbaisch"],
    2: ["Dino Reichmuth", "https://unsplash.com/@dinoreichmuth"],
    3: ["Timothy Simon", "https://unsplash.com/@timtimo"],
    4: ["Ryan Schroeder", "https://unsplash.com/@ryanschroeder"],
    5: ["Eberhard grossgasteiger", "https://unsplash.com/@eberhardgross"]
}


function newTab(){
    window.open(names[imgNumber][1]);
}


function photoCredit(number){
    href.innerText =`@ ${names[number][0]} / Unsplash`;
}

const IMG_NUMBER = 'number';

function bgChange(){
    const number = localStorage.getItem(IMG_NUMBER);
    if (number === null){
        localStorage.setItem(IMG_NUMBER, JSON.stringify(bgOrders));
        return 0
    }
    else{
        const numberParsed = JSON.parse(number);
        numberParsed.unshift(numberParsed.pop());
        localStorage.setItem(IMG_NUMBER, JSON.stringify(numberParsed));
        return numberParsed[0]
    }
}

const imgNumber = bgChange()

// LOCK BACKGROUND IMAGE 

const unlocked = document.getElementById("unlocked");
const locked = document.getElementById("locked");
const lock = document.querySelector(".lock");
const IS_LOCKED = "isLocked"

const IMG_SELECTED = "imgSelected"

function unlockBg(){
    locked.classList.add("hide");
    setIsLocked(false);
    saveIsLocked();
}

function lockBg(){
    unlocked.classList.add("hide");
    setIsLocked(true);
    saveIsLocked();

    const imgArray = localStorage.getItem(IMG_NUMBER);
    const arrayParsed = JSON.parse(imgArray);
    setImageLocked(arrayParsed[0]);
    paintBgLocked();

    
}

function setImageLocked(imgNumber){
    localStorage.setItem(IMG_SELECTED, imgNumber);
}


function paintLock(isLocked){
    const parsed = JSON.parse(isLocked);
    if (parsed === true){
        locked.classList.remove("hide");
    }
    else{
        unlocked.classList.remove("hide");
    }
}




function setIsLocked(bull){
    localStorage.setItem(IS_LOCKED, bull);
}

function saveIsLocked(){
    const isLocked = localStorage.getItem(IS_LOCKED);
    if (isLocked === null){
        setIsLocked(false);
    }
    paintLock(isLocked);
}

function paintBgLocked(){
    const isLocked = localStorage.getItem(IS_LOCKED);
    const isLockedParsed = JSON.parse(isLocked);
    const imgSelected = localStorage.getItem(IMG_SELECTED);
    const imgParsed = JSON.parse(imgSelected);

    if (isLockedParsed === true && imgParsed !== null){
        paintBg(imgParsed);
    }
}



function init(){
    const isLocked = localStorage.getItem(IS_LOCKED);
    const imgSelected = localStorage.getItem(IMG_SELECTED);
    const imgParsed = JSON.parse(imgSelected);
    var paintImgNumber = null;
    if (isLocked === 'true' && imgParsed !== null){
        paintImgNumber = imgParsed;
    }
    else{
        paintImgNumber = imgNumber;
    }
    paintBg(paintImgNumber);
    photoCredit(paintImgNumber);
    saveIsLocked();


}

init();



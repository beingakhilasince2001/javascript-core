
const element = document.getElementById("count");

const body = document.body;
const lightButton = document.querySelector('.light');
const darkButton = document.querySelector('.dark');

let count = 0;

function Increment(){
    count++;
    element.textContent = count;
}

function Decrement(){
    count--;
    element.textContent = count;
}

function Reset(){
    count = 0;
   
}

function switchToLightTheme() {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    
}
function switchToDarkTheme(){
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
}


lightButton.addEventListener("click",switchToLightTheme);
darkButton.addEventListener("click",switchToDarkTheme);
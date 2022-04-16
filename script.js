const button = document.getElementById("enter");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul")
const li = document.querySelectorAll("li")
const clear = document.getElementById("clear")


function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    addDelButton(li)
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick () {
    if (inputLength() > 0 ) {
        createListElement();
    }
}


function addListAfterKeyPress(event) {
    if (inputLength() > 0  && event.keyCode === 13) {
       createListElement();
    }
}

//Strikethrough on li click
function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

//Add delete on new li creation
function addDelButton(parent) {
    const buttonElem = parent.appendChild(document.createElement("button"));
    buttonElem.innerHTML = "Delete";
    buttonElem.onclick = function() {
        this.parentElement.remove();
    }}

function clearAll () {
    ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeyPress)
ul.addEventListener("click", toggleClassDoneOnAndOff);
clear.addEventListener("click", clearAll)
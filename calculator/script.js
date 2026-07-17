const input = document.getElementById("input");
const resultElement = document.getElementById("count");

let expression = "";

function appendValue(value) {
    expression += value;
    input.value = expression;
}

function result() {
    const answer = eval(expression);
    resultElement.textContent = answer;
}

function clearDisplay() {
    expression = "";
    input.value = "";
    resultElement.textContent = "0";
}
let display = document.getElementById("display");
let currentInput = "";  // Guarda a expressão atual

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== "") {
        currentInput += ` ${operator} `;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();  // Para permitir novas operações com o resultado
    } catch (error) {
        display.value = "Erro";
        currentInput = "";
    }
}
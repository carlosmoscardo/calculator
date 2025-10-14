function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Store data of each operation component (e.g.: 2 + 2 => num1 operator num2)
let num1,
    operator,
    num2;

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

// 1. Definir qué función lleva a cabo cada botón de la calculadora cuando es pulsado (hacer testing con console.log)







// 2. Hacer display en la pantalla de la calculadora de los dígitos [0, 9], decimales (.) y operadores (+, -, *, /)
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

// Haz funciones que muestren los números en pantalla cuando pulses los botones
// 1. Guardar en variables el textContent del nodo de los siguientes botones: dígitos [0, 9], decimal (.) y operadores (+, -, *, /) => pensar como hacerlo DRY
// 1.1 Hacer display de cada variable en la pantalla de la calculadora cuando el botón es pulsado
// 2. Guardar en variables el nodo de los botones AC, ⌫, y =
// 2.1 Añadir la correspondiente funcionalidad a cada botón
// 2.2 AC debe limpiar tanto visualmente como internamente la info recibida por la calculadora.
// 2.3 ⌫ debe eliminar tanto visualmente como internamente el último elemento escrito en la calculadora
// 2.4 = debe hacer display del resultado de la operación

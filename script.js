/* GLOBAL VARIABLES */
const screen = document.getElementById("screen")
let currentScreen = ""
let nbMemory
let opMemory
/* array with all the keys */
const op = ["AC", '=',  '.', '%', '/', '*', '-', '+']
const num = [...Array(10).keys()]
const keys = num.concat(op)

function calculate(number1, number2, operator) {
    if (operator == '+') {
        return number1 + number2
    } else if (operator == '-') {
        return number1 - number2
    } else if (operator == '*') {
        return number1 * number2
    } else if (operator == '/') {
        return number1 / number2
    } else if (operator == '%') {
        return number1 % number2
    }
}

function printOnScreen(thing) {
    thing = String(thing)
    const len = thing.length
    let fsize
    if (len <= 7) {
        fsize = 65
    } else if (len >= 21) {
        fsize = 22
    } else {
        fsize = - 2.7 * len + 72
    }
    screen.innerHTML = '<p style="font-size :' + String(fsize) + 'px">' + thing + "</p>";
}

function buttonUse(button) {
    const data = button.firstChild.data
    if (data in num || data == '.') {
        currentScreen += data
        printOnScreen(Number(currentScreen))
    } else {
        if (data == "AC") {
            currentScreen = ""
            nbMemory = null
            opMemory = null
            printOnScreen(0)
        } else if (data == '=') {
            currentScreen = calculate(Number(nbMemory), Number(currentScreen), opMemory)
            printOnScreen(currentScreen)
            currentScreen = ""
            nbMemory = null
            opMemory = null
        } else {
            opMemory = data
            if (nbMemory == null) {
                nbMemory = Number(currentScreen)
                currentScreen = ""
            }
        }
    }
}

/* generating the HTML with the array above */
const div = document.getElementById("calculator")
div.innerHTML += keys.reverse().map(k => `<button>${k}</button>`).join("");

/* assigning click event to buttons */
let buttons = document.getElementsByTagName("button")
for (let i in buttons) {
    buttons[i].onclick = function() {
        buttonUse(buttons[i])
    }
}

printOnScreen(0)

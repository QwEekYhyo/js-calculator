const screen = document.getElementById("screen")

function printOnScreen(thing) {
    screen.innerHTML = "<p>" + String(thing) + "</p>";
}

const op = ["AC", ".", "%", "/", "*", "-", "+"]
const tchoin = [...Array(10).keys()]

const keys = tchoin.concat(op)

let temp
const div = document.getElementById("calculator")
div.innerHTML += keys.reverse().map(k => `<button>${k}</button>`).join("");

printOnScreen(69)

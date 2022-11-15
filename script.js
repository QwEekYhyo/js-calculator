const screen = document.getElementById("screen")

function printOnScreen(thing) {
    thing = String(thing)
    const len = thing.length
    let fsize
    if (len <= 7) {
        fsize = 65
    } else if (len > 21) {
        fsize = 22
    } else {
        fsize = - 2.7 * len + 72
    }
    screen.innerHTML = '<p style="font-size :' + String(fsize) + 'px">' + thing + "</p>";
}

const op = ["AC", ".", "%", "/", "*", "-", "+"]
const tchoin = [...Array(10).keys()]

const keys = tchoin.concat(op)

const div = document.getElementById("calculator")
div.innerHTML += keys.reverse().map(k => `<button>${k}</button>`).join("");

let buttons = document.getElementsByTagName("button")
for (let i in buttons) {
    buttons[i].onclick = function() {
        printOnScreen(buttons[i].firstChild.data)
    }
}

printOnScreen(69)

function printOnScreen(thing) {
    screen = document.getElementById("screen")
    screen.innerHTML = "<p>" + String(thing) + "</p>";
}

const op = ["AC", ".", "%", "/", "*", "-", "+"]
const tchoin = [...Array(10).keys()]

let keys = tchoin.concat(op)

let temp

for (let i = keys.length - 1; i >= 0; i--) {
    temp = "<button>" + keys[i] + "</button>"
    document.getElementById("calculator").innerHTML += temp
}

printOnScreen(69)

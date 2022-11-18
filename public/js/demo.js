function displayText() {
    document.querySelector(".pts-text").innerHTML = "Points";
}

function countTo(x) {
    let from = 0;
    let to = document.querySelector(".val").id;
    console.log(document.querySelector(".val"));

    let step = to > from ? 1 : -1;
    let interval = 10;

    if (from == to) {
        document.querySelector(".val").textContent = from;
        return;
    }

    let counter = setInterval(function () {
        if (from == 0) {
            displayText();
        }
        from += step;
        document.querySelector(".val").textContent = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo();

function displayText() {
    document.querySelector(".pts-text").innerHTML = "Points";
  }
  
function countTo(){
    let from = 0;
    let to = 69;
    let step = to > from ? 1 : -1;
    let interval = 50;

    if(from == to){
        document.querySelector(".val").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        if(from==0){
            displayText();
        }
        from += step;
        document.querySelector(".val").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();


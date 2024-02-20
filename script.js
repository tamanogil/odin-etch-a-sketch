let color = "black"
let click = false
document.addEventListener("DOMContentLoaded", function(e){
    createBoard()

    document.querySelector("body").addEventListener("click", function(e){
    if(e.currentTarget.tagName != "BUTTON") {
        click = !click;
        let draw = document.querySelector("#draw");
        if(click){
            draw.innerHTML = "You can now draw"
        }
        else{
            draw.innerHTML = "You're not allowed to draw"
        }
    }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numberDivs = size * size;

    for(let i = 0;  i < numberDivs; i++){
        let div = document.createElement("div")
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend",  div)   
    }
}

function getSize() {
    let input = prompt("What would be the size of the board?")
    let message = document.querySelector("#message")
    if(input == ""){
        message.innerHTML = "Please provide a number"
    }
    else if(input < 0  || input > 100){
        message.innerHTML = "Please provide a number between 1 to 100"
    }
    else{
        message.innerHTML = "Now you play"
        return input
    }
}
function colorDiv(){
    if(click){    
        if (color == "random") {
            this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)'
        }
        else {
            this.style.backgroundColor = 'black'
        }}
}
function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}
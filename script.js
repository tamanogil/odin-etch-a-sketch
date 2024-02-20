let color = "black"
document.addEventListener("DOMContentLoaded", function(){
    createBoard()

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
    if(color == "random"){
        this.style.backgroundColor  = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)'
    }
    else{
        this.style.backgroundColor  = 'black'
    }
}
function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}
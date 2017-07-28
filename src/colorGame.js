var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  })
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change colors on the spage
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelBlue";
}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare clicked colors
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares to match given color
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
    //Get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //blue
    var b = Math.floor(Math.random() * 256);
    //green
    var g = Math.floor(Math.random() * 256);
    //Assemble values to make an RGB color string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

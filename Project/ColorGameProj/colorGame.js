let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for (let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.textContent === "Easy"){
        //     numSquares = 3;
        // }
        // else{
        //     numSquares = 6;
        // }


        //figure out how many squares to show
        //pick new colors 
        //pick a new pickedColor
        //update page to reflect changes
        reset();
    })
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor=pickColor();
    //change color display to match picked colors
    colorDisplay.textContent = pickedColor;
    //change colors of squares 
    for (var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";
    message.textContent = "";
    resetButton.textContent = "New Color";

}


// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3
//     colors=generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }

//     }
//     h1.style.backgroundColor = "steelBlue";
// });

// hardBtn.addEventListener("click", function(){
    
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors=generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
//     h1.style.backgroundColor = "steelBlue";
// });


resetButton.addEventListener("click", function(){
    // //generate all new colors
    // colors = generateRandomColors(numSquares);
    // //pick a new random color from array
    // pickedColor=pickColor();
    // //change color display to match picked colors
    // colorDisplay.textContent = pickedColor;
    // //change colors of squares 
    // for (let i = 0; i<squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelBlue";
    // message.textContent = "";
    // this.textContent = "New Color";
    reset();

})




colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = squares[i].style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            message.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
         
    });
}

function changeColors(color){
    //loop through all squares
    for (let i = 0; i<colors.length; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // pick a random number;
    //Math.random returns a number between 0 and 1 (not including 1);
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to arr
    for (let i = 0; i < num; i++){
        //get random color and push into an array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    let r = Math.floor(Math.random()*256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random()*256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", "+ g + ", " + b +")";
}
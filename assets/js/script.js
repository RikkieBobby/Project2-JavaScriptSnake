
// snake board - creates the borad in the canvas on the HTML document - credit to ImKennyYip on GitHub
var blockSize = 25;
var rows = 20;
var cols = 30;
var board;
var context;

// laods the position of the snake head onto the board - credit to ImKennyYip on GitHub
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// adds the speed of the snakes movement - credit to ImKennyYip on GitHub
var velocityX = 0;
var velocityY = 0;

// creates an array that allows to snake to increase in size everytime it moves over the food position - credit to ImKennyYip on GitHub
var snakeBody = [];

// loads the position of the food onto the board - credit to ImKennyYip on GitHub
var foodX;
var foodY;

var gameOver = false;

// laods the board onto the page when the page is initialized - credit to ImKennyYip on GitHub
window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used to draw on the board
    document.getElementById("restart").addEventListener("click", function() {
        document.location.reload(); //refreshes the page when the restart button is clicked
    })


    placeFood();
    document.addEventListener("keyup", changeDirection); // calls the function called changeDirection when an arrow key is pressed to move the snake - credit to ImKennyYip on GitHub
    //update();
    setInterval(update, 1000/10); // runs the update function every 100 miliseconds to move the position of the snake on the board - credit to ImKennyYip on GitHub
}

// colors the board black upon loading - credit to ImKennyYip on GitHub
function update() {

    // sets the game to end when parameters are met
    if (gameOver) {
        return; 
    }


    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    // loads the color of the food to the board - credit to ImKennyYip on GitHub
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // chnages the position of the food on the board when the snake moves over - credit to ImKennyYip on GitHub
    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY])
        placeFood();
        incrementScore(); // calls the increment score function 
    }

    // array used to move the last piece of the body forward to where the heads last position was to keep the snake together - credit to ImKennyYip on GitHub
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    // loads the color of the snake head and its velocity to the board - credit to ImKennyYip on GitHub
    context.fillStyle="orange";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize); // the array used to increase the snake body size
    }

    // game over conditions - credit to ImKennyYip on GitHub
    if (snakeX < 0  || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over");
    } // ends the game if the snake tries to move outside of the board

    for (let i = 0; i < snakeBody.length; i ++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    } // ends the game if the snake comes into contact with itself

}

// function used to control the direction and movement of the snake - credit to ImKennyYip on GitHub
function changeDirection(e) {
    console.log(e.code);
    if (e.code == "KeyW" && velocityY != 1) { // here "&& velocity" prevents the snake from being able to turn the opposite direction of where it is going
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "KeyS" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "KeyA" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "KeyD" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// a function used to randomly place the food on different parts of the board - credit to ImKennyYip on GitHub
function placeFood () {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

// function used to increase the score each time food is consumed
function incrementScore () {

    let currentScore = parseInt(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = ++currentScore
}
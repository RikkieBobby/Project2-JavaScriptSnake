
// snake board - credit to ImKennyYip on GitHub: creates the borad in the canvas on the HTML document
var blockSize = 25;
var rows = 20;
var cols = 30;
var board;
var context;

// laods the position of the snake head onto the board - credit to ImKennyYip on GitHub
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// loads the position of the food onto the board - credit to ImKennyYip on GitHub
var foodX;
var foodY;

// laods the board onto the page when the page is initialized - credit to ImKennyYip on GitHub
window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used to draw on the board

    placeFood();
    update();
}

// colors the board black upon loading - credit to ImKennyYip on GitHub
function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    // loads the color of the snake head to the board - credit to ImKennyYip on GitHub
    context.fillStyle="orange"
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // loads the color of the food to the board - credit to ImKennyYip on GitHub
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize)
}

// a function used to randomly place the food on different parts of the board - credit to ImKennyYip on GitHub
function placeFood () {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

// snake board - credit to ImKennyYip on GitHub: creates the borad in the canvas on the HTML document
var blockSize = 25;
var rows = 30;
var cols = 20;
var board;
var context;

// snake head - credit to ImKennyYip on GitHub: adds the location of the snake head onto the board at the X and Y coordinates
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
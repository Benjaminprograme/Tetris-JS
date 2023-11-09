let randomColor = Math.floor(Math.random() * 4) + 1; //1=red,2=green,3=blue,4=yellow
const spawnPoint_N = 1;
const spawnPoint = 5;

//Create board that show the next piece
let nextShapeBoard = [];
for (i = 0; i < 16; i++) {
  let cube = document.createElement("div");
  const nextShape = document.getElementById("nextShape");

  cube.className = "cube2";
  cube.innerText = i;
  nextShape.appendChild(cube);
  nextShapeBoard.unshift(null);
}

let cubes2 = document.getElementsByClassName("cube2");

function visualeNextShape() {
  for (i = 0; i < 16; i++) {
    if (nextShapeBoard[i] != null) {
      if (nextShapeBoard[i] == 1) {
        cubes2[i].style.backgroundColor = "red";
      } else if (nextShapeBoard[i] == 2) {
        cubes2[i].style.backgroundColor = "green";
      } else if (nextShapeBoard[i] == 3) {
        cubes2[i].style.backgroundColor = "blue";
      } else if (nextShapeBoard[i] == 4) {
        cubes2[i].style.backgroundColor = "yellow";
      }
    }
    if (nextShapeBoard[i] == null) {
      cubes2[i].style.backgroundColor = "rgb(182, 182, 182)";
    }
  }
}

function createI_N() {
  for (i = 0; i < 4; i++) {
    nextShapeBoard[spawnPoint_N + 4 * i] = randomColor;
  }
  visualeNextShape();
}

function createJ_N() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      nextShapeBoard[spawnPoint_N + 4 * i] = randomColor;
    } else {
      nextShapeBoard[spawnPoint_N + 4 * (i - 1) - 1] = randomColor;
    }
  }
  visualeNextShape();
}

function createL_N() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      nextShapeBoard[spawnPoint_N + 4 * i] = randomColor;
    } else {
      nextShapeBoard[spawnPoint_N + 4 * (i - 1) + 1] = randomColor;
    }
  }
  visualeNextShape();
}

function createO_N() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      nextShapeBoard[spawnPoint_N + i] = randomColor;
    } else {
      nextShapeBoard[spawnPoint_N + 4 + (i - 2)] = randomColor;
    }
  }
  visualeNextShape();
}

function createZ_N() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      nextShapeBoard[spawnPoint_N + i] = randomColor;
    } else {
      nextShapeBoard[spawnPoint_N + 4 + (i - 2) + 1] = randomColor;
    }
  }
  visualeNextShape();
}

function createT_N() {
  for (i = 0; i < 4; i++) {
    if (i == 0) {
      nextShapeBoard[spawnPoint_N] = randomColor;
    } else {
      nextShapeBoard[spawnPoint_N + 2 + i] = randomColor;
    }
  }
  visualeNextShape();
}

function createS_N() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      nextShapeBoard[spawnPoint_N + i] = randomColor;
    } else {
      nextShapeBoard[spawnPoint_N + 4 - (i - 2)] = randomColor;
    }
  }
  visualeNextShape();
}

//Creat board
let board = [];
for (i = 0; i < 240; i++) {
  let cube = document.createElement("div");
  const tetrisBoard = document.getElementById("tetrisBoard");

  cube.className = "cube";
  cube.innerText = i;
  tetrisBoard.appendChild(cube);
  board.unshift(null);
}

//Creating shapes

function createI() {
  for (i = 0; i < 4; i++) {
    board[spawnPoint + 10 * i] = randomColor;
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createJ() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      board[spawnPoint + 10 * i] = randomColor;
    } else {
      board[spawnPoint + 10 * (i - 1) - 1] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createL() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      board[spawnPoint + 10 * i] = randomColor;
    } else {
      board[spawnPoint + 10 * (i - 1) + 1] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createO() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      board[spawnPoint + i] = randomColor;
    } else {
      board[spawnPoint + 10 + (i - 2)] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createZ() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      board[spawnPoint + i] = randomColor;
    } else {
      board[spawnPoint + 10 + (i - 2) + 1] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createT() {
  for (i = 0; i < 4; i++) {
    if (i == 0) {
      board[spawnPoint] = randomColor;
    } else {
      board[spawnPoint + 8 + i] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createS() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      board[spawnPoint + i] = randomColor;
    } else {
      board[spawnPoint + 10 - (i - 2)] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

let cubes = document.getElementsByClassName("cube");

function visualeBoard() {
  for (i = 0; i < 256; i++) {
    if (board[i] != null) {
      if (board[i] == 1) {
        cubes[i].style.backgroundColor = "red";
      } else if (board[i] == 2) {
        cubes[i].style.backgroundColor = "green";
      } else if (board[i] == 3) {
        cubes[i].style.backgroundColor = "blue";
      } else if (board[i] == 4) {
        cubes[i].style.backgroundColor = "yellow";
      }
    }
  }
}

let randomShape = Math.floor(Math.random() * 7) + 1;

function createRandomShape() {
  if (randomShape == 1) {
    createI();
  } else if (randomShape == 2) {
    createJ();
  } else if (randomShape == 3) {
    createL();
  } else if (randomShape == 4) {
    createO();
  } else if (randomShape == 5) {
    createS();
  } else if (randomShape == 6) {
    createT();
  } else {
    createZ();
  }

  randomShape = Math.floor(Math.random() * 7) + 1;
  syncOrderOfShapes();
  visualeNextShape();
}

createRandomShape();

function clearNextShapeBoard() {
  for (i = 0; i < 16; i++) {
    nextShapeBoard[i] = null;
  }
  visualeNextShape();
}

function syncOrderOfShapes() {
  clearNextShapeBoard();
  if (randomShape == 1) {
    createI_N();
  } else if (randomShape == 2) {
    createJ_N();
  } else if (randomShape == 3) {
    createL_N();
  } else if (randomShape == 4) {
    createO_N();
  } else if (randomShape == 5) {
    createS_N();
  } else if (randomShape == 6) {
    createT_N();
  } else {
    createZ_N();
  }
}

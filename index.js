let randomColor = Math.floor(Math.random() * 4) + 1; //1=red,2=green,3=blue,4=yellow
const nextShapeSpawnPoint = 1;
const boardSpawnPoint = 5;

let nextShapeSegments = [];

for (i = 0; i < 16; i++) {
  let cube = document.createElement("div");
  const nextShape = document.getElementById("nextShapeBoard");

  cube.className = "nextShapeSegment";
  cube.innerText = i; //TESTING

  nextShape.appendChild(cube);
  nextShapeSegments.unshift(null);
}

let nextShapeSegment = document.getElementsByClassName("nextShapeSegment");

function visualeNextShape() {
  for (i = 0; i < 16; i++) {
    if (nextShapeSegments[i] != null) {
      if (nextShapeSegments[i] == 1) {
        nextShapeSegment[i].style.backgroundColor = "red";
      } else if (nextShapeSegments[i] == 2) {
        nextShapeSegment[i].style.backgroundColor = "green";
      } else if (nextShapeSegments[i] == 3) {
        nextShapeSegment[i].style.backgroundColor = "blue";
      } else if (nextShapeSegments[i] == 4) {
        nextShapeSegment[i].style.backgroundColor = "yellow";
      }
    }

    if (nextShapeSegments[i] == null) {
      nextShapeSegment[i].style.backgroundColor = "rgb(182, 182, 182)";
    }
  }
}

function nextI() {
  for (i = 0; i < 4; i++) {
    nextShapeSegments[nextShapeSpawnPoint + 4 * i] = randomColor;
  }

  visualeNextShape();
}

function nextJ() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      nextShapeSegments[nextShapeSpawnPoint + 4 * i] = randomColor;
    } else {
      nextShapeSegments[nextShapeSpawnPoint + 4 * (i - 1) - 1] = randomColor;
    }
  }

  visualeNextShape();
}

function nextN() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      nextShapeSegments[nextShapeSpawnPoint + 4 * i] = randomColor;
    } else {
      nextShapeSegments[nextShapeSpawnPoint + 4 * (i - 1) + 1] = randomColor;
    }
  }

  visualeNextShape();
}

function nextO() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      nextShapeSegments[nextShapeSpawnPoint + i] = randomColor;
    } else {
      nextShapeSegments[nextShapeSpawnPoint + 4 + (i - 2)] = randomColor;
    }
  }

  visualeNextShape();
}

function nextZ() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      nextShapeSegments[nextShapeSpawnPoint + i] = randomColor;
    } else {
      nextShapeSegments[nextShapeSpawnPoint + 4 + (i - 2) + 1] = randomColor;
    }
  }

  visualeNextShape();
}

function nextT() {
  for (i = 0; i < 4; i++) {
    if (i == 0) {
      nextShapeSegments[nextShapeSpawnPoint] = randomColor;
    } else {
      nextShapeSegments[nextShapeSpawnPoint + 2 + i] = randomColor;
    }
  }

  visualeNextShape();
}

function nextS() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      nextShapeSegments[nextShapeSpawnPoint + i] = randomColor;
    } else {
      nextShapeSegments[nextShapeSpawnPoint + 4 - (i - 2)] = randomColor;
    }
  }

  visualeNextShape();
}

function clearNextShapeBoard() {
  for (i = 0; i < 16; i++) {
    nextShapeSegments[i] = null;
  }
  visualeNextShape();
}

let board = [];

for (i = 0; i < 240; i++) {
  let cell = document.createElement("div");
  const tetrisBoard = document.getElementById("tetrisBoard");

  cell.className = "cell";
  cell.innerText = i; //TESTING

  tetrisBoard.appendChild(cell);
  board.unshift(null);
}

function createI() {
  for (i = 0; i < 4; i++) {
    board[boardSpawnPoint + 10 * i] = randomColor;
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createJ() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      board[boardSpawnPoint + 10 * i] = randomColor;
    } else {
      board[boardSpawnPoint + 10 * (i - 1) - 1] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createL() {
  for (i = 0; i < 4; i++) {
    if (i <= 2) {
      board[boardSpawnPoint + 10 * i] = randomColor;
    } else {
      board[boardSpawnPoint + 10 * (i - 1) + 1] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createO() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      board[boardSpawnPoint + i] = randomColor;
    } else {
      board[boardSpawnPoint + 10 + (i - 2)] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createZ() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      board[boardSpawnPoint + i] = randomColor;
    } else {
      board[boardSpawnPoint + 10 + (i - 2) + 1] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createT() {
  for (i = 0; i < 4; i++) {
    if (i == 0) {
      board[boardSpawnPoint] = randomColor;
    } else {
      board[boardSpawnPoint + 8 + i] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

function createS() {
  for (i = 0; i < 4; i++) {
    if (i <= 1) {
      board[boardSpawnPoint + i] = randomColor;
    } else {
      board[boardSpawnPoint + 10 - (i - 2)] = randomColor;
    }
  }
  visualeBoard();
  randomColor = Math.floor(Math.random() * 4) + 1;
}

let cells = document.getElementsByClassName("cell");

function visualeBoard() {
  for (i = 0; i < 240; i++) {
    if (board[i] != null) {
      if (board[i] == 1) {
        cells[i].style.backgroundColor = "red";
      } else if (board[i] == 2) {
        cells[i].style.backgroundColor = "green";
      } else if (board[i] == 3) {
        cells[i].style.backgroundColor = "blue";
      } else if (board[i] == 4) {
        cells[i].style.backgroundColor = "yellow";
      }
    } else if (board[i] == null) {
      cells[i].style.backgroundColor = "gray";
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
  showNextShape();
  visualeNextShape();
}

createRandomShape();

function showNextShape() {
  clearNextShapeBoard();
  if (randomShape == 1) {
    nextI();
  } else if (randomShape == 2) {
    nextJ();
  } else if (randomShape == 3) {
    nextN();
  } else if (randomShape == 4) {
    nextO();
  } else if (randomShape == 5) {
    nextS();
  } else if (randomShape == 6) {
    nextT();
  } else {
    nextZ();
  }
}

let takenFields = [];

for (i = 0; i < 240; i++) {
  takenFields[i] = false;
}

function stopAllCurrentBlocks() {
  for (i = 0; i < 240; i++) {
    if (board[i] != null) {
      takenFields[i] = true;
    }
  }
}

function applyGravity() {
  for (i = 240; i > 0; i--) {
    if (i >= 230 && board[i] != null && takenFields[i] == false) {
      stopAllCurrentBlocks();
      createRandomShape();
    }

    if (
      board[i] != null &&
      takenFields[i + 10] == true &&
      takenFields[i] == false
    ) {
      stopAllCurrentBlocks();
      createRandomShape();
    }

    if (
      board[(i - 239) * -1] != null &&
      takenFields[(i - 239) * -1 + 10] == true &&
      takenFields[(i - 239) * -1] == false
    ) {
      stopAllCurrentBlocks();
      createRandomShape();
    }

    if (
      board[i] != null &&
      board[i + 10] == null &&
      takenFields[i] == false &&
      takenFields[i + 10] == false
    ) {
      board[i + 10] = board[i];
      board[i] = null;
    }
  }

  visualeBoard();
}

setInterval(applyGravity, 800);

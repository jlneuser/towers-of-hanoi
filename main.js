
const board = [
  [5, 4, 3, 2, 1],
  [],
  []
]


function displayBoard() {
  board.map(function(peg) {
    console.log("--- " + peg)
  })
}

function moveDisc(fromPeg, toPeg) {
  fromPeg = fromPeg - 1
  toPeg = toPeg - 1

  if (board[fromPeg].length === 0) {
    console.log("No disc to move!")
    return
  }

  // Get the top disc from the fromPeg
  let disc = board[fromPeg].pop()


  if (board[toPeg].length > 0 && board[toPeg][board[toPeg].length - 1] < disc) {
    console.log("Invalid move: cannot place larger disc on smaller disc.")
    board[fromPeg].push(disc); // Put the disc back
    return
  }

  // Place the disc on the toPeg
  board[toPeg].push(disc)

  // Display the updated board and check if the player has won
  displayBoard()
  checkWinner()
}

function checkWinner() {
  const winningPeg = [5, 4, 3, 2, 1]

  
  if (board[1] === winningPeg || board[2] === winningPeg) {
    console.log("You've won the game!")
    resetGame()
  }
}

// Function to reset the game for a new start
function resetGame() {
  board = [
    [5, 4, 3, 2, 1],
    [],
    []
  ]
  console.log("New game started")
  displayBoard()
}


displayBoard()

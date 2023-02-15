// Define the tic tac toe game board and player turns
let board = ['','','','','','','','',''];
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;

// Function to handle a player's turn
function playerTurn(position) {
  // Check if the selected position is empty
  if (board[position] === '') {
    // Set the board position to the current player's mark
    board[position] = currentPlayer;
    // Toggle the current player
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
    // Check for a winner
    let winner = checkWinner();
    if (winner) {
      alert(winner + ' wins!');
    } else {
      // Check for a tie game
      if (board.indexOf('') === -1) {
        alert('Tie game!');
      }
    }
  }
}

// Function to check if a player has won
function checkWinner() {
  let winningCombinations = [    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    let [a,b,c] = winningCombinations[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

// Example gameplay
playerTurn(0);
playerTurn(1);
playerTurn(4);
playerTurn(2);
playerTurn(8);
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

function makeMove(cell, index) {
  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every(cell => cell)) {
    document.getElementById('status').textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = "Player X's turn";
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

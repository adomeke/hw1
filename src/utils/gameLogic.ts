import type { Board, Player, GameState } from '../types';

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

export const createInitialGameState = (): GameState => ({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isGameOver: false
});

export const makeMove = (gameState: GameState, index: number): GameState => {
  if (gameState.isGameOver || gameState.board[index] !== null) {
    return gameState;
  }

  const newBoard = [...gameState.board];
  newBoard[index] = gameState.currentPlayer;

  const winner = checkWinner(newBoard);
  const isGameOver = winner !== null || newBoard.every(cell => cell !== null);

  return {
    board: newBoard,
    currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
    winner,
    isGameOver
  };
};

export const checkWinner = (board: Board): Player => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const resetGame = (): GameState => createInitialGameState();

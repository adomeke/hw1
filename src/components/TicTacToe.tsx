import React from 'react';
import { useTicTacToe } from '../hooks/useTicTacToe';

const TicTacToe: React.FC = () => {
  const { gameState, handleCellClick, handleReset } = useTicTacToe();

  const getStatusMessage = () => {
    if (gameState.winner) {
      return `Player ${gameState.winner} wins!`;
    }
    if (gameState.isGameOver) {
      return "It's a draw!";
    }
    return `Current player: ${gameState.currentPlayer}`;
  };

  const getCellClass = (value: string | null) => {
    const baseClass =
      'w-16 h-16 text-2xl font-bold border-2 border-gray-400 flex items-center justify-center transition-colors';
    if (value === 'X') {
      return `${baseClass} bg-blue-100 text-blue-600`;
    }
    if (value === 'O') {
      return `${baseClass} bg-red-100 text-red-600`;
    }
    return `${baseClass} bg-white hover:bg-gray-50 cursor-pointer`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Tic-Tac-Toe
      </h2>

      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-gray-700">
          {getStatusMessage()}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {gameState.board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(index)}
            disabled={gameState.isGameOver || cell !== null}
            className={getCellClass(cell)}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-semibold"
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;

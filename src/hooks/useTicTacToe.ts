import { useState } from 'react';
import type { GameState } from '../types';
import { createInitialGameState, makeMove, resetGame } from '../utils/gameLogic';

export const useTicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>(createInitialGameState());

  const handleCellClick = (index: number) => {
    setGameState(prev => makeMove(prev, index));
  };

  const handleReset = () => {
    setGameState(resetGame());
  };

  return {
    gameState,
    handleCellClick,
    handleReset
  };
};

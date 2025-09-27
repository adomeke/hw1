import { describe, it, expect } from 'vitest';
import {
  createInitialGameState,
  makeMove,
  checkWinner,
  resetGame,
} from '../src/utils/gameLogic';
import { Player } from '../src/types';

describe('TicTacToe Game Logic', () => {
  describe('createInitialGameState', () => {
    it('should create initial game state', () => {
      const gameState = createInitialGameState();

      expect(gameState.board).toEqual([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]);
      expect(gameState.currentPlayer).toBe('X');
      expect(gameState.winner).toBe(null);
      expect(gameState.isGameOver).toBe(false);
    });
  });

  describe('makeMove', () => {
    it('should make a valid move', () => {
      const gameState = createInitialGameState();
      const newState = makeMove(gameState, 0);

      expect(newState.board[0]).toBe('X');
      expect(newState.currentPlayer).toBe('O');
      expect(newState.winner).toBe(null);
      expect(newState.isGameOver).toBe(false);
    });

    it('should not allow move on occupied cell', () => {
      const gameState = createInitialGameState();
      const stateAfterFirstMove = makeMove(gameState, 0);
      const stateAfterSecondMove = makeMove(stateAfterFirstMove, 0);

      expect(stateAfterSecondMove.board[0]).toBe('X');
      expect(stateAfterSecondMove.currentPlayer).toBe('O');
    });

    it('should not allow move when game is over', () => {
      const gameState = createInitialGameState();
      // Create a winning scenario
      let state = gameState;
      state = makeMove(state, 0); // X
      state = makeMove(state, 3); // O
      state = makeMove(state, 1); // X
      state = makeMove(state, 4); // O
      state = makeMove(state, 2); // X wins

      const finalState = makeMove(state, 5);

      expect(finalState.board[5]).toBe(null);
    });
  });

  describe('checkWinner', () => {
    it('should detect horizontal win', () => {
      const board: Player[] = [
        'X',
        'X',
        'X',
        null,
        null,
        null,
        null,
        null,
        null,
      ];
      expect(checkWinner(board)).toBe('X');
    });

    it('should detect vertical win', () => {
      const board: Player[] = [
        'O',
        null,
        null,
        'O',
        null,
        null,
        'O',
        null,
        null,
      ];
      expect(checkWinner(board)).toBe('O');
    });

    it('should detect diagonal win', () => {
      const board: Player[] = [
        'X',
        null,
        null,
        null,
        'X',
        null,
        null,
        null,
        'X',
      ];
      expect(checkWinner(board)).toBe('X');
    });

    it('should detect anti-diagonal win', () => {
      const board: Player[] = [
        null,
        null,
        'O',
        null,
        'O',
        null,
        'O',
        null,
        null,
      ];
      expect(checkWinner(board)).toBe('O');
    });

    it('should return null when no winner', () => {
      const board: Player[] = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
      expect(checkWinner(board)).toBe(null);
    });
  });

  describe('resetGame', () => {
    it('should reset to initial state', () => {
      const resetState = resetGame();

      expect(resetState.board).toEqual([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]);
      expect(resetState.currentPlayer).toBe('X');
      expect(resetState.winner).toBe(null);
      expect(resetState.isGameOver).toBe(false);
    });
  });
});

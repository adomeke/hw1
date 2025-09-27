export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type Player = 'X' | 'O' | null;
export type Board = Player[];

export interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player;
  isGameOver: boolean;
}

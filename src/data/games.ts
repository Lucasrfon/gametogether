export type GameType = 'standard' | 'premium' | 'featured';
export type GameStatus = 'Soon' | 'In Progress' | 'Done';
export type GameCategory = 'board' | 'card' | 'casual' | 'strategy';

export interface Game {
  name: string;
  slug: string;
  category: GameCategory;
  type: GameType;
  status: GameStatus;
}

export const games: Game[] = [
  {
    name: 'Chess',
    slug: 'chess',
    category: 'board',
    type: 'standard',
    status: 'Soon',
  },
  {
    name: 'Checkers',
    slug: 'checkers',
    category: 'board',
    type: 'standard',
    status: 'Soon',
  },
  {
    name: 'Mill',
    slug: 'mill',
    category: 'board',
    type: 'standard',
    status: 'In Progress',
  },
  {
    name: 'Dots and Boxes',
    slug: 'dotsandboxes',
    category: 'casual',
    type: 'standard',
    status: 'Done',
  },
  {
    name: 'Tic Tac Toe',
    slug: 'tictactoe',
    category: 'casual',
    type: 'standard',
    status: 'Done',
  },
  {
    name: 'Connect Four',
    slug: 'connectfour',
    category: 'board',
    type: 'standard',
    status: 'Soon',
  },
  {
    name: 'Treinador Pokemon',
    slug: 'treinadorpokemon',
    category: 'board',
    type: 'premium',
    status: 'In Progress',
  },
];

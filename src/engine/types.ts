export type GameOptions = {
  gridSize: number;
  maxTicks: number;
};

export type GameOptionsOptionals = {};

export enum Move {
  NORTH = "N",
  SOUTH = "S",
  EAST = "E",
  WEST = "W",
}

export type Pos = [number, number];

export type GameState = {
  tick: number;
  positions: Array<Pos[]>;
  food: Pos[];
  playerAlive: boolean[];
  meta: {
    gridSize: number;
    playerCount: number;
    gameId: string;
  };
};

export interface Controller {
  name?: string;
  init: (state: GameState) => void;
  update: (state: GameState) => Move;
}

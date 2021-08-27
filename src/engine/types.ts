export type GameOptions = {
  gridSize: number;
  maxTicks: number;
};

export type GameHistory =
  | {
      error: false;
      tickCount: number;
      ticks: Omit<GameState, "meta">[];
      winner: number;
      gridSize: number;
      playerCount: number;
      gameId: string;
    }
  | { error: true; errorMessage: string };

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
  lastMoves: Move[];
  meta: {
    gridSize: number;
    playerCount: number;
    gameId: string;
  };
};

export interface Controller {
  init: (playerPos: number) => void;
  update: (state: GameState) => Move;
}

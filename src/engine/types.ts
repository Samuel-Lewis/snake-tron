export type GameOptions = {
  gridSize: number;
  maxTicks: number;
};

export type MetalessGameState = Omit<GameState, "meta">;
export type GameHistory = {
  tickCount: number;
  ticks: MetalessGameState[];
  winner: number;
  gridSize: number;
  playerCount: number;
  gameId: string;
  timeStamp: string;
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
  lastMoves: Move[];
  meta: {
    gridSize: number;
    playerCount: number;
    gameId: string;
  };
};

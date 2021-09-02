export type GameOptions = {
  gridSize: number;
  maxTicks: number;
};

export enum GameResult {
  DRAW = "DRAW",
  WINNER = "WINNER",
  TIMEOUT = "TIMEOUT",
}

export type MetalessGameState = Omit<GameState, "meta">;
export type GameHistory = {
  tickCount: number;
  ticks: MetalessGameState[];
  winner: number;
  result: GameResult;
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

export const isPos = (pos: any): pos is Pos => {
  return Array.isArray(pos) && pos.length === 2;
};

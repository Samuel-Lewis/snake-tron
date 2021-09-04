import { omit } from "lodash";
import { GameHistory, GameResult, GameState, Move, Pos } from "./types";

export const randomPos = (bounds: number): Pos => {
  return [
    Math.floor(Math.random() * bounds),
    Math.floor(Math.random() * bounds),
  ];
};

export const moveToVector2d = (move: Move): [number, number] => {
  const vecs: { [key: string]: [number, number] } = {
    [Move.NORTH]: [0, -1],
    [Move.SOUTH]: [0, 1],
    [Move.EAST]: [1, 0],
    [Move.WEST]: [-1, 0],
  };
  return vecs[move];
};

export const withinBounds = (pos: Pos, bounds: number): boolean => {
  return pos.every((p) => p >= 0 && p < bounds);
};

export const gameHistorySummarise = (history: GameState[]): GameHistory => {
  const lastFrame = history[history.length - 1];
  const meta = lastFrame.meta;
  const winnerCount = lastFrame.playerAlive.filter((p) => p).length;
  const result =
    winnerCount > 1
      ? GameResult.TIMEOUT
      : winnerCount === 1
      ? GameResult.WINNER
      : GameResult.DRAW;

  let winner = null;
  if (result === GameResult.WINNER) {
    winner = lastFrame.playerAlive.findIndex((p) => p);
  }
  const ticks = history.map((h) => omit(h, ["meta"]));
  const timeStamp = new Date().toISOString();
  return {
    ...meta,
    tickCount: ticks.length,
    ticks,
    winner,
    timeStamp,
    result,
  };
};

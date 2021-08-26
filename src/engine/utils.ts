import { Pos, Move } from "./types";

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

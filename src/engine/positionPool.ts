import { flatten, isEqual } from "lodash";
import { GameState, isPos, Pos } from "./types";

export class PositionPool {
  private gameState: GameState;
  private pool: Pos[];

  constructor(gameState: GameState) {
    this.gameState = gameState;
    this.pool = this.generatePool();
  }

  private generatePool = () => {
    const { positions, meta, food } = this.gameState;
    const width = meta.gridSize;
    const taken = flatten(positions).concat(food);
    return new Array(width * width)
      .fill(0)
      .map((_, i) => [i % width, Math.floor(i / width)])
      .filter((p) => !taken.some((t) => isEqual(t, p)))
      .filter(isPos);
  };

  public next = () => {
    const i = Math.floor(Math.random() * this.pool.length);
    return this.pool.splice(i, 1)[0];
  };

  public empty = () => this.pool.length === 0;
}

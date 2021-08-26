import { v4 as uuidv4 } from "uuid";
import { cloneDeep } from "lodash";

import { Controller, GameOptions, GameState, Pos, Move } from "./types";
import { moveToVector2d, randomPos, withinBounds } from "./utils";

const defaultOptions: GameOptions = {
  gridSize: 50,
  maxTicks: 1000,
};

export class Game {
  controllers: Controller[];
  options: GameOptions;
  gameState: GameState;

  constructor(controllers: Controller[], options?: GameOptions) {
    this.controllers = controllers;
    this.options = { ...defaultOptions, ...options };
    this.gameState = this.initState(controllers, this.options);
    this.initControllers(this.gameState);
  }

  public run() {
    const stateHistory: GameState[] = [];
    while (
      this.gameState.playerAlive.filter((p) => p).length > 1 &&
      this.gameState.tick < this.options.maxTicks
    ) {
      const state = cloneDeep(this.update());
      stateHistory.push(state);
    }
    return stateHistory;
  }

  private initControllers(gameState: GameState) {}

  private initState(
    controllers: Controller[],
    options: GameOptions
  ): GameState {
    const playerCount = controllers.length;
    const newState: GameState = {
      tick: 0,
      positions: [],
      food: [],
      playerAlive: new Array(playerCount).fill(true),
      meta: {
        playerCount,
        gameId: uuidv4(),
        gridSize: options.gridSize,
      },
    };

    newState.positions = this.uniquePos(newState, playerCount).map((p) => [p]);
    newState.food = this.uniquePos(newState, playerCount);
    return newState;
  }

  private uniquePos(gameState: GameState, positions: number = 1): Pos[] {
    const poss: Pos[] = [];

    // TODO: actually ensure unique positions
    for (let i = 0; i < positions; i++) {
      const p = randomPos(gameState.meta.gridSize);
      poss.push(p);
    }

    return poss;
  }

  public update() {
    const controllerMoves = this.controllers.map((c) =>
      c.update(this.gameState)
    );

    const newState = this.apply(this.gameState, controllerMoves);
    this.gameState = newState;
    return this.gameState;
  }

  private apply(oldState: GameState, controllerMoves: Move[]): GameState {
    const newState = { ...oldState };

    newState.tick = oldState.tick + 1;

    controllerMoves.forEach((move, player) => {
      const currentHead = oldState.positions[player][0];
      const moveVec = moveToVector2d(move);
      const newHead = [
        currentHead[0] + moveVec[0],
        currentHead[1] + moveVec[1],
      ] as Pos;

      // Check bounds collision
      if (!withinBounds(newHead, newState.meta.gridSize)) {
        newState.playerAlive[player] = false;
        return;
      }

      // Check part collision
      const collided = oldState.positions.some((pos) => {
        return pos.some(([x, y]) => x === newHead[0] && y === newHead[1]);
      });

      if (collided) {
        newState.playerAlive[player] = false;
        return;
      }

      // Check food collision
      const ateFood = oldState.food.some((pos) => {
        if (pos[0] === newHead[0] && pos[1] === newHead[1]) {
          newState.food = newState.food.filter((p) => p !== pos);
          return true;
        }
        return false;
      });

      if (!ateFood) {
        newState.positions[player].pop();
      }
      newState.positions[player].unshift(newHead);
    });

    // Repopulate food
    newState.food.push(
      ...this.uniquePos(
        newState,
        newState.meta.playerCount - newState.food.length
      )
    );

    return newState;
  }
}

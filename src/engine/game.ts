import { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { Controller } from "../controller/types";
import { GameOptions, GameState, Move, Pos } from "./types";
import { gameHistorySummarise, moveToVector2d, randomPos, withinBounds } from "./utils";

const defaultOptions: GameOptions = {
  gridSize: 50,
  maxTicks: 1000,
};

export class Game {
  controllers: Controller[];
  options: GameOptions;
  gameState: GameState;
  controllersReady: boolean[];
  onGameTick: (tick: number) => void;

  constructor(
    controllers: Controller[],
    options?: GameOptions,
    onGameTick?: (tick: number) => void
  ) {
    this.controllers = controllers;
    this.options = { ...defaultOptions, ...options };
    console.log(options);
    this.gameState = this.initState(controllers, this.options);
    this.controllersReady = new Array(controllers.length).fill(false);
    this.onGameTick = onGameTick ?? (() => {});
  }

  public async initControllers() {
    await Promise.all(
      this.controllers.map(async (c, i) => {
        await c.init({
          playerNumber: i,
          gameId: this.gameState.meta.gameId,
          gridSize: this.gameState.meta.gridSize,
          playerCount: this.gameState.meta.playerCount,
        });
        this.controllersReady[i] = true;
      })
    );
  }

  public async run() {
    if (!this.controllersReady.every((r) => r)) {
      throw new Error(
        "Controllers are not ready. " + JSON.stringify(this.controllersReady)
      );
    }

    const allStates: GameState[] = [];
    while (
      this.gameState.playerAlive.filter((p) => p).length > 1 &&
      this.gameState.tick < this.options.maxTicks
    ) {
      const copy = cloneDeep(this.gameState);
      allStates.push(copy);
      await this.update();
      this.onGameTick(this.gameState.tick);
    }
    const copy = cloneDeep(this.gameState);
    allStates.push(copy);
    this.onGameTick(this.gameState.tick);
    return gameHistorySummarise(allStates);
  }

  private initState(
    controllers: Controller[],
    options: GameOptions
  ): GameState {
    const playerCount = controllers.length;
    const newState: GameState = {
      tick: 0,
      positions: [],
      lastMoves: [],
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

  public async update() {
    const controllerMoves = await Promise.all(
      this.controllers.map(async (c, i) => await c.update(this.gameState, i))
    );

    const newState = this.apply(this.gameState, controllerMoves);
    this.gameState = newState;
    return this.gameState;
  }

  private apply(oldState: GameState, controllerMoves: Move[]): GameState {
    const newState = { ...oldState };

    newState.tick = oldState.tick + 1;

    controllerMoves.forEach((move, player) => {
      if (!oldState.playerAlive[player]) {
        return;
      }

      const currentHead = oldState.positions[player][0];
      const moveVec = moveToVector2d(move);
      const newHead = [
        currentHead[0] + moveVec[0],
        currentHead[1] + moveVec[1],
      ] as Pos;

      newState.lastMoves[player] = move;

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

import { notification } from "antd";
import { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { Controller } from "../controller/types";
import { PositionPool } from "./positionPool";
import { GameOptions, GameState, isPos, Move, Pos } from "./types";
import { gameHistorySummarise, moveToVector2d, withinBounds } from "./utils";

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

    const posPool = new PositionPool(newState);

    newState.positions = new Array(playerCount)
      .fill(null)
      .map(() => [posPool.next()]);
    newState.food = new Array(playerCount).fill(null).map(() => posPool.next());
    return newState;
  }

  public async update() {
    const controllerMoves = await Promise.all(
      this.controllers.map(
        async (c, i) => await c.update(this.gameState, i).catch(() => null)
      )
    );

    const newState = this.apply(this.gameState, controllerMoves);
    this.gameState = newState;
    return this.gameState;
  }

  private apply(
    oldState: GameState,
    controllerMoves: (Move | null)[]
  ): GameState {
    const newState = { ...oldState };

    newState.tick = oldState.tick + 1;

    const newHeads = controllerMoves.map((move, player) => {
      if (move === null) {
        notification.error({
          message: `Player ${player} disqualified`,
          description: `Player ${player} has been disqualified. Either the controller has crashed or it returned an invalid move.`,
          duration: 0,
        });
        newState.playerAlive[player] = false;
        return null;
      }

      if (!oldState.playerAlive[player]) {
        return null;
      }
      newState.lastMoves[player] = move;
      const currentHead = oldState.positions[player][0];
      const moveVec = moveToVector2d(move);
      return [currentHead[0] + moveVec[0], currentHead[1] + moveVec[1]] as Pos;
    });

    // Check out of bounds
    newHeads.forEach((head, player) => {
      if (head === null) {
        return;
      }
      if (!withinBounds(head, newState.meta.gridSize)) {
        newState.playerAlive[player] = false;
      }
    });

    // Check head collisions
    newHeads.forEach((head, player) => {
      if (head === null) {
        return;
      }
      const collides = newHeads
        .filter((p) => p !== null && p[0] === head[0] && p[1] === head[1])
        .filter(isPos).length;

      // Collides with more than self
      if (collides > 1) {
        newState.playerAlive[player] = false;
      }
    });

    // Eat or shrink
    const eatenFoodIndex: Set<number> = new Set();
    newHeads.forEach((head, player) => {
      if (head === null) {
        return;
      }
      const collides = newState.food.findIndex(
        (p) => p !== null && p[0] === head[0] && p[1] === head[1]
      );

      if (collides !== -1) {
        // Eats food
        eatenFoodIndex.add(collides);
      } else {
        // Shrinks
        newState.positions[player].pop();
      }
    });

    // Detect head vs body collisions
    const allBodies = newState.positions.flat();
    newHeads.forEach((head, player) => {
      if (head === null) {
        return;
      }
      const collides = allBodies.findIndex(
        (p) => p !== null && p[0] === head[0] && p[1] === head[1]
      );
      if (collides !== -1) {
        newState.playerAlive[player] = false;
      }
    });

    // Commit to new heads
    newHeads.forEach((head, player) => {
      if (head === null) {
        return;
      }
      newState.positions[player].unshift(head);
    });

    // Replace eaten food
    const positionPool = new PositionPool(newState);
    newState.food = newState.food
      .map((p, i) => {
        if (eatenFoodIndex.has(i)) {
          if (positionPool.empty()) {
            return undefined;
          }
          return positionPool.next();
        }
        return p;
      })
      .filter(isPos);
    return newState;
  }
}

import { GameState, Move } from "../../engine/types";
import { Controller, InitPayload } from "../types";

export class BuiltInRandomController implements Controller {
  init = async (payload: InitPayload) => {};

  update = async (state: GameState, playerNumber?: number) => {
    const validMoves = [Move.EAST, Move.NORTH, Move.SOUTH, Move.WEST];
    return validMoves[Math.floor(Math.random() * validMoves.length)];
  };

  end = async (state: GameState, playerNumber?: number) => {
    return;
  };
}

import { Controller, GameState, Move } from "../engine/types";

export class RandomController implements Controller {
  init = () => {};
  update = (state: GameState) => {
    return Move.NORTH;
  };
}

import { GameState, Move } from "../engine/types";

export type InitPayload = {
  gameId: string;
  gridSize: number;
  playerCount: number;
  playerNumber: number;
};

export interface Controller {
  init: (initPayload: InitPayload) => Promise<void>;
  update: (state: GameState) => Promise<Move>;
}

export type ControllerSelectorProps = {
  setController: (controller: Controller) => void;
  position?: number;
};

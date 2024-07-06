import React from "react";
import { GameState, Move } from "../engine/types";

export type InitPayload = {
  gameId: string;
  gridSize: number;
  playerCount: number;
  playerNumber: number;
};

export interface Controller {
  init: (initPayload: InitPayload) => Promise<void>;
  update: (state: GameState, playerNumber?: number) => Promise<Move>;
  end: (gameState: GameState, playerNumber?: number) => Promise<void>;
}

export type ControllerSelector = React.FC<ControllerSelectorProps>;

export interface ControllerFactory {
  Selector: ControllerSelector;
  create: (value: string) => Controller;
  label: string;
}

export type ControllerSelectorProps = {
  onChange?: (value: string) => void;
};

export const isController = (
  controller: Controller | undefined
): controller is Controller => {
  return !!controller;
};

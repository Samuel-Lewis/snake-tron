import React, { useEffect, useState } from "react";
import { Spin } from "antd";

import { Game } from "../../engine/game";
import { GameHistory, Controller } from "../../engine/types";
import { RandomController } from "../../sample-controllers/random";

export type GameRunnerProps = {
  controllerNames: string[];
  onComplete: (gameHistory: GameHistory) => void;
};

export const GameRunner: React.FunctionComponent<GameRunnerProps> = (props) => {
  const { controllerNames, onComplete } = props;

  useEffect(() => {
    const controllers = controllerNames.map((name) => {
      if (name === "random") {
        return new RandomController();
      }
    });

    const game = new Game(controllers as Controller[]);
    onComplete(game.run());
  }, [controllerNames, onComplete]);

  return (
    <div>
      <Spin size="large" />
    </div>
  );
};

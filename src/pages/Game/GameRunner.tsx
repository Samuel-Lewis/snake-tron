import { Spin } from "antd";
import React, { useEffect } from "react";
import { Game } from "../../engine/game";
import { Controller, GameHistory } from "../../engine/types";
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

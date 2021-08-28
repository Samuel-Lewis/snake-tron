import { Spin } from "antd";
import React from "react";
import { GameHistory } from "../../engine/types";

export type GameRunnerProps = {
  controllerNames: string[];
  onComplete: (gameHistory: GameHistory) => void;
};

export const GameRunner: React.FunctionComponent<GameRunnerProps> = (props) => {
  // const { controllerNames, onComplete } = props;

  // useEffect(() => {
  //   const controllers = controllerNames.map((name) => {
  //     if (name === "random") {
  //       return new RandomController();
  //     }
  //   });

  //   const game = new Game(controllers as Controller[]);
  //   onComplete(game.run());
  // }, [controllerNames, onComplete]);

  return (
    <div>
      <Spin size="large" />
    </div>
  );
};

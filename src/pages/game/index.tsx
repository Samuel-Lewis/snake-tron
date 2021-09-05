import { Steps, Typography } from "antd";
import React, { useCallback, useState } from "react";
import { Controller } from "../../controller/types";
import { GameHistory, GameOptions } from "../../engine/types";
import { ControllerCreator } from "./ControllerCreator";
import { Run } from "./Run";
import { GameSetup } from "./Setup";
import { Summary } from "./Summary";

const { Step } = Steps;
const { Title } = Typography;

export type GamePageProps = {};

enum SetupStage {
  CONTROLLER_CREATOR,
  GAME_SETUP,
  PLAYING,
  SUMMARY,
}

export const GameRunner: React.FunctionComponent<GamePageProps> = () => {
  const [currentStage, setCurrentStage] = useState(
    SetupStage.CONTROLLER_CREATOR
  );

  const [controllers, setControllers] = useState<Controller[]>([]);
  const [options, setOptions] = useState<GameOptions | undefined>();
  const [gameHistory, setGameHistory] = useState<GameHistory | undefined>();

  const creatorCallback = useCallback(
    (controllers) => {
      setControllers(controllers);
    },
    [setControllers]
  );

  const onConfigChange = useCallback(
    (options) => {
      setOptions(options);
    },
    [setOptions]
  );

  const completeCallback = useCallback(
    (history) => {
      setGameHistory(history);
    },
    [setGameHistory]
  );

  const nextCallback = useCallback(() => {
    setCurrentStage((currentStage + 1) % (SetupStage.SUMMARY + 1));
  }, [currentStage, setCurrentStage]);
  const prevCallback = useCallback(() => {
    setCurrentStage((currentStage - 1) % (SetupStage.SUMMARY + 1));
  }, [currentStage, setCurrentStage]);

  return (
    <>
      <Title>Play a Game</Title>
      <Steps current={currentStage}>
        <Step title="Controller Creator" />
        <Step title="Game Setup" />
        <Step title="Running" />
        <Step title="Summary" />
      </Steps>

      <br />
      {currentStage === SetupStage.CONTROLLER_CREATOR && (
        <ControllerCreator
          onControllerChange={creatorCallback}
          onNext={nextCallback}
        />
      )}
      {currentStage === SetupStage.GAME_SETUP && (
        <GameSetup
          onConfigChange={onConfigChange}
          onNext={nextCallback}
          onPrev={prevCallback}
        />
      )}
      {currentStage === SetupStage.PLAYING && (
        <Run
          controllers={controllers}
          options={options}
          onPrev={prevCallback}
          onNext={nextCallback}
          gameComplete={completeCallback}
        />
      )}
      {currentStage === SetupStage.SUMMARY && (
        <Summary
          gameHistory={gameHistory}
          onNext={nextCallback}
          onPrev={prevCallback}
        />
      )}
    </>
  );
};

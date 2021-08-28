import { Steps, Typography } from "antd";
import React, { useCallback, useState } from "react";
import { Controller } from "../../controller/types";
import { GameOptions } from "../../engine/types";
import { ControllerCreator } from "./ControllerCreator";
import { Run } from "./Run";
import { GameSetup } from "./Setup";

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

  const nextCallback = useCallback(() => {
    setCurrentStage(Math.min(currentStage + 1, SetupStage.SUMMARY));
  }, [currentStage, setCurrentStage]);
  const prevCallback = useCallback(() => {
    setCurrentStage(Math.max(currentStage - 1, SetupStage.CONTROLLER_CREATOR));
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
        />
      )}
    </>
  );
};

import { Steps, Typography } from "antd";
import React, { useCallback, useState } from "react";
import { GameHistory } from "../../engine/types";
import { GameRunner } from "./GameRunner";
import { SelectControllers } from "./SelectControllers";
import { Summary } from "./Summary";

const { Step } = Steps;
const { Title } = Typography;

export type GamePageProps = {};

enum SetupStage {
  SELECTING,
  PLAYING,
  FINISHED,
}

export const GamePage: React.FunctionComponent<GamePageProps> = () => {
  const [setupStage, setSetupStage] = useState<SetupStage>(
    SetupStage.SELECTING
  );

  const [controllers, setControllers] = useState<string[]>([]);
  const [history, setHistory] = useState<GameHistory>({
    error: true,
    errorMessage: "Game not ini",
  });

  const selectControllersCallback = useCallback(
    (r) => {
      setControllers(r);
      setSetupStage(SetupStage.PLAYING);
    },
    [setControllers]
  );

  const onCompleteCallback = useCallback(
    (r) => {
      setHistory(r);
      setSetupStage(SetupStage.FINISHED);
    },
    [setHistory]
  );

  let content = null;
  switch (setupStage) {
    case SetupStage.SELECTING:
      content = <SelectControllers onSubmit={selectControllersCallback} />;
      break;
    case SetupStage.PLAYING:
      content = (
        <GameRunner
          controllerNames={controllers}
          onComplete={onCompleteCallback}
        />
      );
      break;
    case SetupStage.FINISHED:
      content = <Summary gameHistory={history} />;
      break;
  }

  return (
    <div>
      <Title>Run a game</Title>
      <Steps current={setupStage}>
        <Step title="Game Setup" />
        <Step title="Simulating" />
        <Step title="Summary" />
      </Steps>

      {content}
    </div>
  );
};

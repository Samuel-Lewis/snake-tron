import { Button, Collapse, Result, Typography } from "antd";
import React from "react";
import { TrophyOutlined } from "@ant-design/icons";
import { GameHistory } from "../../engine/types";

const { Panel } = Collapse;
const { Paragraph } = Typography;

export type SummaryProps = {
  gameHistory?: GameHistory;
  onNext: () => void;
};

export const Summary: React.FunctionComponent<SummaryProps> = (props) => {
  const { gameHistory, onNext } = props;

  if (!gameHistory) {
    return <div>No game history??</div>;
  }

  if (gameHistory.error) {
    return <div>Error: {gameHistory.errorMessage}</div>;
  }

  return (
    <>
      <Result
        icon={<TrophyOutlined />}
        status="success"
        title={"Player " + gameHistory.winner + " wins!"}
      />

      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Full Game History" key="1">
          <Paragraph>
            <pre>{JSON.stringify(gameHistory, null, 2)}</pre>
          </Paragraph>
        </Panel>
      </Collapse>
      <Button onClick={onNext}>Start Again</Button>
    </>
  );
};

import React from "react";
import { Typography, Button, Collapse } from "antd";

import { GameState, GameHistory } from "../../engine/types";

const { Paragraph } = Typography;
const { Panel } = Collapse;

export type SummaryProps = {
  gameHistory: GameHistory;
};

const downloadData = (gameHistory: GameHistory) => {
  const timestamp = new Date().toISOString();
  const fileName = `${timestamp}_summary.json`;

  const a = document.createElement("a");
  const file = new Blob([JSON.stringify(gameHistory)], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};

export const Summary: React.FunctionComponent<SummaryProps> = (props) => {
  const { gameHistory } = props;

  return (
    <div>
      <Button type="primary" onClick={() => downloadData(gameHistory)}>
        Download
      </Button>
      <Collapse>
        <Panel header="Full Game History" key="1">
          <Paragraph>
            <pre>{JSON.stringify(gameHistory, null, 2)}</pre>
          </Paragraph>
        </Panel>
      </Collapse>
    </div>
  );
};

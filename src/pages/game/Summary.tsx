import { Button, Collapse, Result, Typography } from "antd";
import React, { useCallback } from "react";
import { DownloadOutlined, SaveOutlined, TrophyOutlined } from "@ant-design/icons";
import { GameHistory } from "../../engine/types";
import { addHistory } from "../../store";
import { createDownloadHref } from "../../store/download";

const { Panel } = Collapse;
const { Paragraph } = Typography;

export type SummaryProps = {
  gameHistory?: GameHistory;
  onNext: () => void;
};

export const Summary: React.FunctionComponent<SummaryProps> = (props) => {
  const { gameHistory, onNext } = props;
  const handleSave = useCallback(() => {
    if (!gameHistory) {
      return;
    }
    addHistory(gameHistory);
  }, [gameHistory]);

  if (!gameHistory) {
    return <div>Error: No game history specified</div>;
  }

  const downloadProps = createDownloadHref(gameHistory);

  return (
    <>
      <Result
        icon={<TrophyOutlined />}
        status="success"
        title={"Player " + gameHistory.winner + " wins!"}
      />

      <Button icon={<DownloadOutlined />} {...downloadProps}>
        Download
      </Button>
      <Button icon={<SaveOutlined />} onClick={handleSave}>
        Save
      </Button>

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

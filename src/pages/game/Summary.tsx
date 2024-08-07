import {
  Button,
  Collapse,
  Divider,
  notification,
  Result,
  Space,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DownloadOutlined,
  EyeOutlined,
  HourglassOutlined,
  MehOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { GameHistory, GameResult } from "../../engine/types";
import { createDownloadHref } from "../../store/download";
import { addHistory } from "../../store/history";

const { Panel } = Collapse;
const { Paragraph } = Typography;

export type SummaryProps = {
  gameHistory?: GameHistory;
  onNext: () => void;
  onPrev: () => void;
};

export const Summary: React.FC<SummaryProps> = (props) => {
  const { gameHistory, onNext, onPrev } = props;
  useEffect(() => {
    if (gameHistory) {
      addHistory(gameHistory).catch((e) => {
        notification.error({
          message: "Could not save history",
          description: e.message,
        });
      });
    }
  }, [gameHistory]);

  if (!gameHistory) {
    return <div>Error: No game history specified</div>;
  }

  const downloadProps = createDownloadHref(gameHistory);

  let result = (
    <Result
      icon={<TrophyOutlined />}
      status="success"
      title={"Player " + gameHistory.winner + " wins!"}
    />
  );

  if (gameHistory.result === GameResult.DRAW) {
    result = <Result icon={<MehOutlined />} status="warning" title={"Draw!"} />;
  } else if (gameHistory.result === GameResult.TIMEOUT) {
    result = (
      <Result icon={<HourglassOutlined />} status="warning" title={"Timeout"} />
    );
  }
  return (
    <>
      {result}
      <Space>
        <Button onClick={onPrev} type="primary">
          Play again
        </Button>
        <Button onClick={onNext}>New game</Button>
        <Link to={`/viewer?gameId=${gameHistory?.gameId}`}>
          <Button icon={<EyeOutlined />}>Show in viewer</Button>
        </Link>
        <Button icon={<DownloadOutlined />} {...downloadProps}>
          Download replay
        </Button>
      </Space>

      <Divider />

      <Collapse>
        <Panel header="Full Game History" key="1">
          <Paragraph>
            <pre>{JSON.stringify(gameHistory, null, 2)}</pre>
          </Paragraph>
        </Panel>
      </Collapse>
    </>
  );
};

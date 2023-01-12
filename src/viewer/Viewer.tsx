import { Button, Col, Row, Slider } from "antd";
import React, { useCallback, useState } from "react";
import { GameHistory } from "../engine/types";
import { Canvas } from "./Canvas";
import { StateSnapshot } from "./Snapshot";

export type ViewerProps = {
  history?: GameHistory;
};

export const Viewer: React.FunctionComponent<ViewerProps> = (props) => {
  const { history } = props;
  const [tick, setTick] = useState(0);
  const sliderChange = useCallback((value) => setTick(value), [setTick]);

  const forwardTick = useCallback(
    () => setTick(Math.min(tick + 1, (history?.tickCount ?? 1) - 1)),
    [history, tick]
  );

  const backwardTick = useCallback(
    () => setTick(Math.max(tick - 1, 0)),
    [tick]
  );

  if (!history) {
    return <div>Error: No history loaded?!</div>;
  }

  return (
    <Row justify="center" gutter={16}>
      <Col flex="400px">
        <Canvas state={history.ticks[tick]} gridSize={history.gridSize} />
        <Row gutter={16}>
          <Col flex="32px">
            <Button onClick={backwardTick} shape="circle">
              🡄
            </Button>
          </Col>
          <Col flex="auto">
            <Slider
              value={tick}
              min={0}
              max={history.tickCount - 1}
              onChange={sliderChange}
            />
          </Col>

          <Col flex="32px">
            <Button onClick={forwardTick} shape="circle">
              🡆
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <StateSnapshot frame={history.ticks[tick]} />
      </Col>
    </Row>
  );
};

import {
    Col,
    Row,
    Slider
} from "antd";
import React, {
    useCallback,
    useState
} from "react";
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

  if (!history) {
    return <div>Error: No history loaded?!</div>;
  }

  return (
    <Row justify="center">
      <Col span={12}>
        <Canvas state={history.ticks[tick]} gridSize={history.gridSize} />
        <Slider
          style={{ width: "400px", marginLeft: 0, marginRight: 0 }}
          value={tick}
          min={0}
          max={history.tickCount - 1}
          onChange={sliderChange}
        />
      </Col>
      <Col span={12}>
        <StateSnapshot frame={history.ticks[tick]} />
      </Col>
    </Row>
  );
};

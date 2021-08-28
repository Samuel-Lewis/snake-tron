import React, { useCallback, useState } from "react";
import { GameState } from "../engine/types";
import { Canvas } from "./Canvas";

export type ViewerProps = {
  states?: GameState[];
};

export const Viewer: React.FunctionComponent<ViewerProps> = (props) => {
  const { states } = props;
  const [tick, setTick] = useState(0);
  const sliderChange = useCallback(
    (e) => {
      setTick(e.target.value);
    },
    [setTick]
  );

  if (!states) {
    return <div>No states loaded</div>;
  }

  return (
    <div>
      <Canvas state={states[tick]} />
      <input
        type="range"
        value={tick}
        min={0}
        max={states.length - 1}
        onChange={sliderChange}
      />
      <div>Tick: {tick}</div>
      <hr />
      <pre>{JSON.stringify(states[tick], null, 2)}</pre>
    </div>
  );
};

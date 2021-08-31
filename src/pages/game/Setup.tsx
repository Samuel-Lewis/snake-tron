import { Button, Form, InputNumber, Space } from "antd";
import React, { useCallback, useEffect } from "react";
import { GameOptions } from "../../engine/types";

export type GameSetupProps = {
  onConfigChange: (options: GameOptions) => void;
  onNext: () => void;
  onPrev: () => void;
};

export const GameSetup: React.FunctionComponent<GameSetupProps> = ({
  onConfigChange,
  onNext,
  onPrev,
}) => {
  const [gridSize, setGridSize] = React.useState(50);
  const [maxTicks, setMaxTicks] = React.useState(1000);

  const changeCallback = useCallback(() => {
    onConfigChange({
      gridSize,
      maxTicks,
    });
  }, [onConfigChange, gridSize, maxTicks]);

  const onMaxTicksChange = useCallback(
    (value: number) => {
      setMaxTicks(value);
      changeCallback();
    },
    [changeCallback, setMaxTicks]
  );

  const onGridSizeChange = useCallback(
    (value: number) => {
      setGridSize(value);
      changeCallback();
    },
    [changeCallback, setGridSize]
  );

  useEffect(() => {
    onConfigChange({
      gridSize,
      maxTicks,
    });
  }, [onConfigChange, gridSize, maxTicks]);

  return (
    <>
      <Form>
        <Form.Item label="Max ticks">
          <InputNumber
            min={1}
            max={10000}
            defaultValue={1000}
            value={maxTicks}
            onChange={onMaxTicksChange}
          />
        </Form.Item>

        <Form.Item label="Grid size">
          <InputNumber
            min={10}
            max={1000}
            defaultValue={50}
            value={gridSize}
            onChange={onGridSizeChange}
          />
        </Form.Item>
      </Form>

      <Space>
        <Button onClick={onPrev}>Previous</Button>
        <Button type="primary" onClick={onNext}>
          Start
        </Button>
      </Space>
    </>
  );
};

import { Alert, Button, Typography } from "antd";
import React, { useCallback } from "react";
import { Controller } from "../../controller/types";
import { GameOptions } from "../../engine/types";

const { Paragraph } = Typography;

export type RunProps = {
  controllers?: Controller[];
  options?: GameOptions;
  onPrev: () => void;
};

export const Run: React.FunctionComponent<RunProps> = ({
  controllers,
  options,
  onPrev,
}) => {
  const onCancel = useCallback(() => {
    onPrev();
  }, [onPrev]);

  if (!controllers || !controllers.length || !options) {
    return (
      <>
        <Alert
          message="Something went wrong... There were either no controllers or options specified"
          type="error"
          showIcon
        />
        <Paragraph>
          Controllers:
          <pre>{JSON.stringify(controllers, null, 2)}</pre>
        </Paragraph>
        <Paragraph>
          Options:
          <pre>{JSON.stringify(options, null, 2)}</pre>
        </Paragraph>
        <Button onClick={onCancel}>Previous</Button>
      </>
    );
  }

  return (
    <>
      <Button onClick={onCancel} danger>
        Cancel
      </Button>
    </>
  );
};

import { Alert, Button, Typography } from "antd";
import React from "react";
import { Controller } from "../../controller/types";
import { Game } from "../../engine/game";
import { GameOptions } from "../../engine/types";

const { Paragraph } = Typography;

export type RunProps = {
  controllers?: Controller[];
  options?: GameOptions;
  onPrev: () => void;
};

export type RunState = {
  game?: Game;
};

export class Run extends React.Component<RunProps, RunState> {
  constructor(props: RunProps) {
    super(props);
    this.state = {};
  }

  onCancel = () => {
    this.props.onPrev();
  };

  render() {
    const { controllers, options } = this.props;
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
          <Button onClick={this.onCancel}>Previous</Button>
        </>
      );
    }

    return (
      <>
        <Button onClick={this.onCancel} danger>
          Cancel
        </Button>
      </>
    );
  }
}

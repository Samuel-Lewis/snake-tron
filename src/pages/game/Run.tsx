import { Alert, Button, Typography } from "antd";
import React from "react";
import { Controller } from "../../controller/types";
import { Game } from "../../engine/game";
import { GameOptions } from "../../engine/types";

const { Paragraph } = Typography;

export type RunProps = {
  controllers?: Controller[];
  onPrev: () => void;
  options?: GameOptions;
};

export type RunState = {
  controllerError?: string;
  controllersReady: boolean;
  game?: Game;
};

export class Run extends React.Component<RunProps, RunState> {
  constructor(props: RunProps) {
    super(props);
    this.state = {
      controllersReady: false,
    };
  }

  componentDidMount() {
    const { controllers, options } = this.props;
    if (!controllers) {
      return;
    }
    const game = new Game(controllers, options);
    this.setState({ game });

    game
      .initControllers()
      .then(() => {
        this.setState({ controllersReady: true });
      })
      .catch((err) => {
        this.setState({ controllerError: err.message });
      });
  }

  onCancel = () => {
    this.props.onPrev();
  };

  render() {
    const { controllers, options } = this.props;
    console.log({ controllers, options });

    if (!controllers || !controllers.length || !options) {
      return (
        <>
          <Alert
            message="Something went wrong... There were either no controllers or no options specified"
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

    const { game, controllersReady, controllerError } = this.state;

    let status = null;

    if (!game) {
      status = "No game...?";
    } else if (controllerError) {
      status = "Controller error! " + controllerError;
    } else if (!controllersReady) {
      status = "Initializing controllers...";
    }

    return (
      <>
        <Paragraph>{status}</Paragraph>
        <Button onClick={this.onCancel} danger>
          Cancel
        </Button>
      </>
    );
  }
}

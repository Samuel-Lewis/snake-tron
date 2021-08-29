import { Alert, Button, Typography } from "antd";
import React from "react";
import { Controller } from "../../controller/types";
import { Game } from "../../engine/game";
import { GameHistory, GameOptions } from "../../engine/types";

const { Paragraph } = Typography;

export type RunProps = {
  controllers?: Controller[];
  onPrev: () => void;
  onNext: () => void;
  options?: GameOptions;
  gameComplete: (history: GameHistory) => void;
};

export enum RunStage {
  UNSET,
  CONTROLLER_INIT,
  ERROR_STATE,
  GAME_RUN,
  GAME_OVER,
}

export type RunState = {
  errorTitle?: string;
  errorDesc?: string;
  game?: Game;
  runStage: RunStage;
  history?: GameHistory;
};

export class Run extends React.Component<RunProps, RunState> {
  constructor(props: RunProps) {
    super(props);
    this.state = {
      runStage: RunStage.UNSET,
    };
  }

  componentDidUpdate(_: RunProps, prevState: RunState) {
    if (prevState.runStage !== this.state.runStage) {
      this.stateUpdate();
    }
  }

  componentDidMount() {
    const { controllers, options } = this.props;

    if (!controllers || !controllers.length || !options) {
      this.setState({
        runStage: RunStage.ERROR_STATE,
        errorTitle: "Missing controllers or options?",
        errorDesc:
          JSON.stringify(controllers, null, 2) +
          "\n" +
          JSON.stringify(options, null, 2),
      });
      return;
    }

    const game = new Game(controllers, options);
    this.setState({ game, runStage: RunStage.CONTROLLER_INIT });
  }

  onCancel = () => {
    this.props.onPrev();
  };

  stateUpdate = (g?: Game) => {
    const { runStage, game } = this.state;
    if (!game) {
      this.setState({
        runStage: RunStage.ERROR_STATE,
        errorTitle: "No game object available",
      });
      return;
    }

    switch (runStage) {
      case RunStage.CONTROLLER_INIT:
        game
          .initControllers()
          .then(() => {
            this.setState({ runStage: RunStage.GAME_RUN });
          })
          .catch((err) => {
            this.setState({
              runStage: RunStage.ERROR_STATE,
              errorTitle: "Error initialising controllers",
              errorDesc: err.message,
            });
          });
        break;
      case RunStage.GAME_RUN:
        game
          .run()
          .then((history) => {
            this.props.gameComplete(history);
            this.setState({
              runStage: RunStage.GAME_OVER,
              history,
            });
          })
          .catch((err) => {
            this.setState({
              runStage: RunStage.ERROR_STATE,
              errorTitle: "Error running game",
              errorDesc: err.message,
            });
          });
        break;
    }
  };

  statusMessage = () => {
    const { runStage, errorDesc, errorTitle } = this.state;
    switch (runStage) {
      case RunStage.CONTROLLER_INIT:
        return <Paragraph>Initialising controllers...</Paragraph>;
      case RunStage.ERROR_STATE:
        return (
          <Alert
            message={errorTitle}
            description={<pre>{errorDesc}</pre>}
            type="error"
            showIcon
          />
        );
      case RunStage.GAME_RUN:
        return (
          <>
            <Paragraph>Running game...</Paragraph>
            <Button onClick={this.onCancel}>Previous</Button>
          </>
        );
      case RunStage.GAME_OVER:
        return <Alert message="Game complete!" type="success" showIcon />;
      default:
        return (
          <Alert message="Game unset!? Contact dev" type="warning" showIcon />
        );
    }
  };

  render() {
    const { runStage } = this.state;
    const { onNext } = this.props;
    const body = this.statusMessage();

    return (
      <>
        {body}
        <br />

        {runStage === RunStage.GAME_OVER ? (
          <Button type="primary" onClick={onNext}>
            Next
          </Button>
        ) : (
          <Button onClick={this.onCancel} danger>
            Cancel
          </Button>
        )}
      </>
    );
  }
}

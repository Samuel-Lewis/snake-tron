import {
    Alert,
    Button,
    Progress,
    ProgressProps,
    Space,
    Typography
} from "antd";
import React from "react";
import { Controller } from "../../controller/types";
import { Game } from "../../engine/game";
import {
    GameHistory,
    GameOptions
} from "../../engine/types";

const { Title } = Typography;

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
  tickProgress: number;
};

export class Run extends React.Component<RunProps, RunState> {
  constructor(props: RunProps) {
    super(props);
    this.state = {
      runStage: RunStage.UNSET,
      tickProgress: 0,
    };
  }

  componentDidUpdate(_: RunProps, prevState: RunState) {
    if (prevState.runStage !== this.state.runStage) {
      this.stateUpdate();
    }
  }

  onTickUpdate = (tick: number) => {
    const { options } = this.props;
    if (!options) {
      return;
    }
    const tickProgress = Math.round((tick / options.maxTicks) * 100);
    this.setState({ tickProgress });
  };

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

    const game = new Game(controllers, options, this.onTickUpdate);
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
            this.props.onNext();
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
        return <Title level={3}>Initialising controllers...</Title>;
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
        return <Title level={3}>Running...</Title>;
      case RunStage.GAME_OVER:
        return <Title level={3}>Game complete!</Title>;
      default:
        return (
          <Alert message="Game unset!? Contact dev" type="warning" showIcon />
        );
    }
  };

  render() {
    const body = this.statusMessage();

    const { tickProgress, runStage } = this.state;
    let progressStatus: ProgressProps["status"] = "normal";
    if (runStage === RunStage.GAME_RUN) {
      progressStatus = "active";
    } else if (runStage === RunStage.GAME_OVER) {
      progressStatus = "success";
    } else if (runStage === RunStage.ERROR_STATE) {
      progressStatus = "exception";
    }

    return (
      <>
        <Space
          direction="vertical"
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {body}
          <Progress
            type="circle"
            percent={tickProgress}
            status={progressStatus}
          />
          <br />
          <Button size="large" onClick={this.onCancel} danger>
            Cancel
          </Button>
        </Space>
      </>
    );
  }
}

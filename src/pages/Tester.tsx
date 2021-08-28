import { Button, Col, Divider, Row, Tabs, Typography } from "antd";
import React, { useCallback, useState } from "react";
import { RestControllerSelector } from "../controller/adapters/rest";
import { Controller, InitPayload } from "../controller/types";
import { GameState, Move } from "../engine/types";

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const sampleIniData: InitPayload = {
  playerNumber: 2,
  playerCount: 4,
  gameId: "sample-test",
  gridSize: 50,
};

const sampleStateData: GameState = {
  tick: 2,
  positions: [
    [
      [42, 31],
      [41, 31],
      [40, 31],
    ],
    [
      [47, 27],
      [47, 28],
    ],
  ],
  lastMoves: [Move.NORTH, Move.SOUTH],
  food: [
    [35, 16],
    [17, 6],
  ],
  playerAlive: [true, true],
  meta: {
    playerCount: 2,
    gameId: "48e2ee9e-171e-45bd-8904-a762d8e2b782",
    gridSize: 50,
  },
};

export type ControllerTesterPageProps = {};

export const ControllerTesterPage: React.FunctionComponent<ControllerTesterPageProps> =
  () => {
    const [controller, setController] = useState<Controller | null>(null);
    const [response, setResponse] = useState<string>("");
    const [sendData, setSendData] = useState<string>("");

    const loaderCallback = useCallback(
      (newController) => {
        setController(newController);
      },
      [setController]
    );

    const gameIniButton = useCallback(() => {
      setSendData(JSON.stringify(sampleIniData, null, 2));
      controller
        ?.init(sampleIniData)
        .then((r) => setResponse(JSON.stringify(r, null, 2)))
        .catch((e) => setResponse(e.message));
    }, [controller, setResponse]);

    const stateSendButton = useCallback(() => {
      setSendData(JSON.stringify(sampleStateData, null, 2));
      controller
        ?.update(sampleStateData)
        .then((r) => setResponse(JSON.stringify(r, null, 2)))
        .catch((e) => setResponse(e.message));
    }, [controller, setResponse]);

    return (
      <>
        <Title>Controller Tester</Title>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Rest" key="1">
            <RestControllerSelector setController={loaderCallback} />
          </TabPane>
        </Tabs>

        <Button onClick={gameIniButton}>Test game initialise</Button>
        <Button onClick={stateSendButton}>Test game update</Button>

        <Row gutter={16}>
          <Col span={12}>
            <Divider>Sent</Divider>
            <Paragraph>{sendData && <pre>{sendData}</pre>}</Paragraph>
          </Col>
          <Col span={12}>
            <Divider>Response</Divider>
            <Paragraph>{response && <pre>{response}</pre>}</Paragraph>
          </Col>
        </Row>
      </>
    );
  };

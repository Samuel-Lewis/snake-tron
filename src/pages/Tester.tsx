import { Button, Col, Divider, Row, Space, Tabs, Typography } from "antd";
import React, { useCallback, useState } from "react";
import { RestControllerFactory } from "../controller/adapters/rest";
import { Controller, InitPayload } from "../controller/types";
import { GameState, Move } from "../engine/types";

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const dummyId = "48e2ee9e-171e-45bd-8904-a762d8e2b782";

const sampleIniData: InitPayload = {
  playerNumber: 1,
  playerCount: 2,
  gameId: dummyId,
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
    gameId: dummyId,
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
      (value) => {
        setController(RestControllerFactory.create(value));
      },
      [setController]
    );

    const iniTestCallback = useCallback(() => {
      setSendData(JSON.stringify(sampleIniData, null, 2));
      controller
        ?.init(sampleIniData)
        .then((r) => setResponse(JSON.stringify(r, null, 2)))
        .catch((e) => setResponse(e.message));
    }, [controller, setResponse]);

    const stateTestCallback = useCallback(() => {
      setSendData(JSON.stringify(sampleStateData, null, 2));
      controller
        ?.update(sampleStateData, 1)
        .then((r) => setResponse(JSON.stringify(r, null, 2)))
        .catch((e) => setResponse(e.message));
    }, [controller, setResponse]);

    const endTestCallback = useCallback(() => {
      setSendData(JSON.stringify(sampleStateData, null, 2));
      controller
        ?.end(sampleStateData, 1)
        .then((r) => setResponse(JSON.stringify(r, null, 2)))
        .catch((e) => setResponse(e.message));
    }, [controller, setResponse]);

    return (
      <>
        <Title>Controller Tester</Title>

        <Tabs defaultActiveKey="1">
          <TabPane tab={RestControllerFactory.label} key="1">
            <RestControllerFactory.Selector onChange={loaderCallback} />
          </TabPane>
        </Tabs>
        <Space>
          <Button onClick={iniTestCallback}>Test game initialise</Button>
          <Button onClick={stateTestCallback}>Test game update</Button>
          <Button onClick={endTestCallback}>Test game end</Button>
        </Space>

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

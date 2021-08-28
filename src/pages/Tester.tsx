import { Button, Col, Divider, Form, Input, Row, Spin, Typography } from "antd";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { GameState, Move } from "../engine/types";

const { Title, Paragraph } = Typography;

const sampleIniData = {
  playerNumber: 2,
};

const sampleStateDate: GameState = {
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
    const [destAddress, setDestAddress] = useState<string>("");
    const [serverResponse, setServerResponse] = useState<string>("");
    const [fetching, setFetching] = useState<boolean>(false);
    const [sentData, setSentData] = useState<Object | null>(null);

    const iniButtonCallback = useCallback(() => {
      setSentData(sampleIniData);
      axios
        .post(destAddress, sampleIniData)
        .then((response) => {
          setFetching(false);
          setServerResponse(response.data);
        })
        .catch((error) => {
          setFetching(false);
          setServerResponse(error.message);
        });
    }, [destAddress, setFetching, setServerResponse]);

    const stateSendcallback = useCallback(() => {
      setSentData(sampleStateDate);
      axios
        .post(destAddress, sampleStateDate)
        .then((response) => {
          setFetching(false);
          setServerResponse(response.data);
        })
        .catch((error) => {
          setFetching(false);
          setServerResponse(error.message);
        });
    }, [destAddress, setFetching, setServerResponse]);

    return (
      <>
        <Title>Controller Tester</Title>

        <Form.Item label="Controller Address">
          <Input
            placeholder="https://localhost:8001/"
            prefix={<GlobalOutlined />}
            onChange={(event) => setDestAddress(event.target.value)}
          />
        </Form.Item>

        <Button onClick={iniButtonCallback}>Send game initialise</Button>
        <Button onClick={stateSendcallback}>Send game update</Button>

        <Row gutter={16}>
          <Col span={12}>
            <Divider>Sent</Divider>
            <Paragraph>
              {sentData && <pre>{JSON.stringify(sentData, null, 2)}</pre>}
            </Paragraph>
          </Col>
          <Col span={12}>
            <Divider>Response</Divider>
            <Paragraph>
              {fetching ? (
                <Spin />
              ) : (
                serverResponse && <pre>{serverResponse}</pre>
              )}
            </Paragraph>
          </Col>
        </Row>
      </>
    );
  };

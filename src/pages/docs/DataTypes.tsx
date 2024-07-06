import { Divider, Table, Typography } from "antd";
import React from "react";
import { MD } from "./markdown";

const { Title, Paragraph, Text } = Typography;

type CommonType = {
  key: string;
  dataType: string;
  description: string;
  example?: string;
};

const commonTypes: CommonType[] = [
  {
    key: "Pos",
    dataType: "number[]",
    description:
      "An array of exactly length two, describing a position of something within a game.",
    example: "[1,2]",
  },
  {
    key: "Move",
    dataType: `"N" | "S" | "E" | "W" | "X"`,
    description:
      "A cardinal direction, often used to denote directions of a player move. `X` is used to denote a no-operation (NOP), sometimes used when an error has occurred",
  },
  {
    key: "GameResult",
    dataType: `"DRAW" | "WINNER" | "TIMEOUT"`,
    description:
      "Result of a game. `TIMEOUT` is when a game exceeds the max allocated ticks. `DRAW` is when there is no single surviving player (eg, players crash into each other simultaneously)",
  },
];

type PayloadType = {
  name: string;
  description: string | React.ReactElement;
  properties: CommonType[];
};

const payloadTypes: PayloadType[] = [
  {
    name: "Initialiser Payload",
    description:
      "The first payload sent to any controller when the game is first starting",
    properties: [
      {
        key: "gameId",
        dataType: "string",
        description: "Unique identifier of the game",
      },
      {
        key: "gridSize",
        dataType: "number",
        description: "Size of the game grid. Game grid is always a square.",
      },
      {
        key: "playerCount",
        dataType: "number",
        description:
          "Number of players in the game. Includes all alive and dead.",
      },
      {
        key: "playerNumber",
        dataType: "number",
        description:
          "The number identifier of the player which the controller will be able to control",
      },
    ],
  },
  {
    name: "GameState.meta",
    description:
      "Additional information provided with each game state, which is common across the entire game. Provided for convenience.",
    properties: [
      {
        key: "gameId",
        dataType: "string",
        description: "Unique identifier of the game",
      },
      {
        key: "gridSize",
        dataType: "number",
        description: "Size of the game grid. Game grid is always a square.",
      },
      {
        key: "playerCount",
        dataType: "number",
        description:
          "Number of players in the game. Includes all alive and dead.",
      },
    ],
  },
  {
    name: "GameState",
    description:
      "The current state of the game. Think of it as a slice of the full game.",
    properties: [
      {
        key: "tick",
        dataType: "number",
        description: "Current tick of the game",
      },
      {
        key: "positions",
        dataType: "Pos[][]",
        description:
          "Positions of all players in the game. `positions[i]` is all parts of player `i`. `positions[i][0]` is the head of player `i`.",
      },
      {
        key: "foodPositions",
        dataType: "Pos[]",
        description: "Position of all food items on the grid",
      },
      {
        key: "playersAlive",
        dataType: "boolean[]",
        description:
          "Alive status of all players. `playersAlive[i]` would be `true` if player `i` was still alive and in the game.",
      },
      {
        key: "lastMoves",
        dataType: "Move[]",
        description: "The Move of all players in the previous game tick",
      },
      {
        key: "meta",
        dataType: "GameState.meta",
        description: "See `GameState.meta`",
      },
    ],
  },
];

export const DataTypes: React.FC = () => {
  const commonTypesRender = commonTypes
    .sort((a, b) => a.key.localeCompare(b.key))
    .map((type) => {
      return (
        <div key={type.key}>
          <Title level={4} code>
            {type.key}
          </Title>
          <Paragraph>
            <blockquote>
              <Paragraph>
                <Text strong>Type:</Text> <Text code>{type.dataType}</Text>
              </Paragraph>
              <MD text={type.description} />
              {type.example && (
                <Paragraph>
                  <Text strong>Example:</Text> <Text code>{type.example}</Text>
                </Paragraph>
              )}
            </blockquote>
          </Paragraph>
        </div>
      );
    });

  const payloadTypesRender = payloadTypes
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((payload) => {
      const data = payload.properties.sort((a, b) =>
        a.key.localeCompare(b.key)
      );
      return (
        <div key={payload.name}>
          <Title level={4}>{payload.name}</Title>
          <Paragraph>
            <blockquote>
              <Paragraph>{payload.description}</Paragraph>
              <Table dataSource={data} pagination={false}>
                <Table.Column
                  title="Name"
                  dataIndex="key"
                  key="key"
                  render={(val) => <Text code>{val}</Text>}
                />
                <Table.Column
                  title="Type"
                  dataIndex="dataType"
                  key="dataType"
                  render={(val) => <Text code>{val}</Text>}
                />
                <Table.Column
                  title="Description"
                  dataIndex="description"
                  key="description"
                  render={(val) => <MD text={val} />}
                />
              </Table>
            </blockquote>
          </Paragraph>
        </div>
      );
    });

  return (
    <>
      <Title level={2}>Data Types</Title>
      <Divider>
        <Title level={3}>Common Types</Title>
      </Divider>

      {commonTypesRender}
      <Divider>
        <Title level={3}>Payloads</Title>
      </Divider>
      {payloadTypesRender}
    </>
  );
};
